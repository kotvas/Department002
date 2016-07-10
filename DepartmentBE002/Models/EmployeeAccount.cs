using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentBE002.Models
{
    public class EmployeeAccount
    {
        public Guid Id { get; set; }

        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; }

        public decimal Amount { get; set; }
        public DateTime DateOfLastUpdate { get; set; }
    }
}
