using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentBE002.Models
{
    public class EventType
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public double AmountOfEmployee { get; set; }
        public double AmountOfDepartment { get; set; }
    }
}
