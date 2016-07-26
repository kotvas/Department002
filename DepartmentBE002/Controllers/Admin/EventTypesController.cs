using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DepartmentBE002.Models;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DepartmentBE002.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    [EnableCors("AllowAllOrigins")]
    public class EventTypesController : Controller
    {
        private DepartmentContext _context;

        public EventTypesController(DepartmentContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public IEnumerable<EventType> Get()
        {
            var values = _context.EventTypes
                .Where(eT => eT.IsActive)
                .OrderBy(eType => eType.Title)
                .ToList();
            return values;
        }

        [HttpPost]
        public IActionResult Post([FromBody]EventType value)
        {
            value.IsActive = true;

            _context.EventTypes.Add(value);
            _context.SaveChanges();

            return Ok();
        }

        //PUT api/admin/eventtypes/disable/{id}
        [HttpPut("disable/{id}")]
        public IActionResult Put(string id)
        {
            var eventType = _context.EventTypes.FirstOrDefault(eT => eT.Id == new Guid(id));

            eventType.IsActive = false;
            _context.SaveChanges();

            return Ok();
        }

        //DELETE api/admin/eventtypes/{id}
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var eventType = _context.EventTypes.FirstOrDefault(eT => eT.Id == new Guid(id));

            if (eventType!= null)
            {
                _context.EventTypes.Remove(eventType);
                _context.SaveChanges();
            }
        }

    }
}
