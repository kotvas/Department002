using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentBE002.Models
{
    public class DepartmentEvent
    {
        public Guid Id { get; set; }

        public Guid EventTypeId { get; set; }
        public EventType EventType { get; set; }

        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; }


        public DateTime DateCreated { get; set; }
        public DateTime DateOfEvent { get; set; }


        public double AmountOfEmployee { get; set; }
        public double AmountOfDepartment { get; set; }
    }
}
