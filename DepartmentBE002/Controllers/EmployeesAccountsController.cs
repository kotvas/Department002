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
    public class EmployeesAccountsController : Controller
    {
        private DepartmentContext _context;

        public EmployeesAccountsController(DepartmentContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<EmployeeAccount> Get()
        {
            return _context.EmployeesAccounts
                .Include(eA => eA.Employee)
                .OrderByDescending(eA => eA.Employee.LastName).ToList();
        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public Deposit Get(String id)
        //{
        //    return _context.Deposits.Include(p => p.Employee).FirstOrDefault(e => e.Id == new Guid(id));
        //}

        //// POST api/values
        //[HttpPost]
        //public ActionResult Post([FromBody]Deposit value)
        //{
        //    Employee e = _context.Employees.Where(empl => empl.Id == value.EmployeeId).FirstOrDefault();
        //    value.Employee = e;
        //    value.EmployeeId = e.Id;

        //    _context.Deposits.Add(value);
        //    _context.SaveChanges();

        //    return Ok();
        //}
    }
}
