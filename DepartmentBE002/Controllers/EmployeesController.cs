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

        // GET: api/values
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _context.Employees.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Employee Get(String id)
        {
            return _context.Employees
                .OrderBy(e => e.LastName)
                .FirstOrDefault(e => e.Id == new Guid(id));
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody]Employee value)
        {
            _context.Employees.Add(value);
            _context.SaveChanges();

            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
