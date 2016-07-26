using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DepartmentBE002.Models;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DepartmentBE002.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAllOrigins")]
    public class EmployeesController : Controller
    {
        private DepartmentContext _context;

        public EmployeesController(DepartmentContext context)
        {
            _context = context;
        }

        // GET: api/employees
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _context.Employees
                .Where(e => e.IsActive)
                .ToList();
        }

        // GET api/employees/{id}
        [HttpGet("{id}")]
        public Employee Get(String id)
        {
            var employee = _context.Employees
                .Where(e => e.IsActive)
                .OrderBy(e => e.LastName)
                .FirstOrDefault(e => e.Id == new Guid(id));
            return employee;
        }

        // POST api/employees
        [HttpPost]
        public ActionResult Post([FromBody]Employee value)
        {
            value.IsActive = true;

            _context.Employees.Add(value);
            _context.SaveChanges();

            return Ok();
        }

        // PUT api/employees/{id}
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody]Employee value)
        {
            var employee = _context.Employees.FirstOrDefault(e => e.Id == new Guid(id));

            employee.FirstName = value.FirstName;
            employee.LastName = value.LastName;
            employee.DateOfBirth = value.DateOfBirth;
            employee.Phone = value.Phone;

            _context.SaveChanges();

            return Ok();
        }

        //PUT api/employees/disable/{id}
        [HttpPut("disable/{id}")]
        public IActionResult Put(string id)
        {
            var employee = _context.Employees.FirstOrDefault(e => e.Id == new Guid(id));

            employee.IsActive = false;
            _context.SaveChanges();

            return Ok();
        }
    }
}
