using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentBE002.Models
{
    public class EmployeeEvent
    {
        public Guid Id { get; set; }
        public EventType Type { get; set; }
        public Employee ResponsibleEmployee { get; set; }
        public List<Employee> InvitedEmployees { get; set; }
    }
}
