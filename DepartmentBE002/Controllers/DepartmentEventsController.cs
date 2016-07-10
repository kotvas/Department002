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
    public class DepartmentEventsController : Controller
    {
        private DepartmentContext _context;

        public DepartmentEventsController(DepartmentContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<DepartmentEvent> Get()
        {
            return _context.DepartmentEvents
                .Include(e => e.EventType)
                .Include(e => e.Employee)
                .OrderByDescending(p => p.DateOfEvent)
                .ToList();
        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public Deposit Get(String id)
        //{
        //    return _context.Deposits.Include(p => p.Employee).FirstOrDefault(e => e.Id == new Guid(id));
        //}
        
        [HttpPost]
        public ActionResult Post([FromBody]DepartmentEvent value)
        {
            EventType eType = _context.EventTypes.Where(eT => eT.Id == value.EventTypeId).FirstOrDefault();
            value.EventType = eType;
            value.EventTypeId = eType.Id;

            Employee employee = _context.Employees.Where(empl => empl.Id == value.EmployeeId).FirstOrDefault();
            value.Employee = employee;
            value.EmployeeId = employee.Id;

            _context.DepartmentEvents.Add(value);
            _context.SaveChanges();

            return Ok();
        }
    }
}
