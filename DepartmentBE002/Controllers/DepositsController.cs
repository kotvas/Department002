using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using DepartmentBE002.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DepartmentBE002.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAllOrigins")]
    public class DepositsController : Controller
    {
        private DepartmentContext _context;

        public DepositsController(DepartmentContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Deposit> Get()
        {
            return _context.Deposits
                .Include(p => p.Employee)
                .OrderByDescending(p => p.Date)
                .ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Deposit Get(String id)
        {
            return _context.Deposits
                .Include(p => p.Employee)
                .FirstOrDefault(e => e.Id == new Guid(id));
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody]Deposit value)
        {
            Employee employee = _context.Employees
                .Where(empl => empl.Id == value.EmployeeId)
                .FirstOrDefault();

            EmployeeAccount employeeAccount = _context.EmployeesAccounts
                .Where(eA => eA.EmployeeId == value.EmployeeId)
                .FirstOrDefault();

            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                try
                {
                    //Add Deposits data
                    value.Employee = employee;
                    value.EmployeeId = employee.Id;
                    value.Date = DateTime.Now;

                    _context.Deposits.Add(value);
                    _context.SaveChanges();

                    //Add/Update Employee Account data
                    if (employeeAccount == null)
                    {
                        var newEmployeeAccount = new EmployeeAccount()
                        {
                            EmployeeId = employee.Id,
                            Employee = employee,
                            Amount = value.Amount,
                            DateOfLastUpdate = DateTime.Now
                        };

                        _context.EmployeesAccounts.Add(newEmployeeAccount);
                        _context.SaveChanges();
                    }
                    else
                    {
                        employeeAccount.Amount = employeeAccount.Amount + value.Amount;
                        employeeAccount.DateOfLastUpdate = DateTime.Now;

                        _context.SaveChanges();
                    }
                    
                    dbContextTransaction.Commit();
                }
                catch
                {
                    dbContextTransaction.Rollback();
                }
            }

            return Ok();
        }
    }
}
