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

        // GET
        [HttpGet]
        public IEnumerable<EventType> Get()
        {
            return _context.EventTypes.OrderBy(eType => eType.Title).ToList();
        }

        [HttpPost]
        public void Post([FromBody]EventType value)
        {
            _context.EventTypes.Add(value);
            _context.SaveChanges();
        }

        //// GET: api/values
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
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
