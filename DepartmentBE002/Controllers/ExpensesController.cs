using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DepartmentBE002.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DepartmentBE002.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAllOrigins")]
    public class ExpensesController : Controller
    {
        private DepartmentContext _context;

        public ExpensesController(DepartmentContext context)
        {
            _context = context;
        }

        // GET: api/Expenses
        [HttpGet]
        public IEnumerable<Expense> Get()
        {
            var value = _context.Expenses
                .Include(e => e.DepartmentEvent)
                .Include(e => e.DepartmentEvent.Employee)
                .Include(e => e.DepartmentEvent.EventType)
                .Include(e => e.Employee)
                .OrderByDescending(e => e.DateCreate)
                .ToList();
            return value;
        }

        // GET api/values/5
        //[HttpGet("{id}")]
        //public Employee Get(String id)
        //{
        //    return _context.EmployeeEvents.FirstOrDefault(e => e.Id == new Guid(id));
        //}

        // POST api/expenses
        [HttpPost]
        public void Post([FromBody]Expense value)
        {
            _context.Expenses.Add(value);
            _context.SaveChanges();
        }

        //POST api/expenses/forEvent
        [HttpPost("ForEvent/{id}")]
        public IActionResult Post(string id)
        {
            var employeeEvent = _context.DepartmentEvents.FirstOrDefault(e => e.Id == new Guid(id));
            var employees = _context.Employees.Where(e => e.Id != employeeEvent.EmployeeId).ToList();

            DateTime currentDate = DateTime.Now;

            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                try
                {
                    employees.ForEach(delegate (Employee employee)
                    {
                        var newExpense = new Expense()
                        {
                            DepartmentEventId = employeeEvent.Id,
                            DepartmentEvent = employeeEvent,
                            EmployeeId = employee.Id,
                            Employee = employee,
                            Amount = employeeEvent.AmountOfEmployee,
                            DateCreate = currentDate,
                            Status = "Initial"
                        };
                        _context.Expenses.Add(newExpense);
                        _context.SaveChanges();
                    });

                    dbContextTransaction.Commit();
                }
                catch
                {
                    dbContextTransaction.Rollback();
                }
            }

            return Ok();// ("ID = " + id);
        }

        // PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
