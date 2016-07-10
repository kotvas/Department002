using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentBE002.Models
{
    public class Expense
    {
        public Guid Id { get; set; }

        public Guid DepartmentEventId { get; set; }
        public DepartmentEvent DepartmentEvent { get; set; }

        public Guid? EmployeeId { get; set; }
        public Employee Employee { get; set; }

        public double Amount { get; set; }
        public DateTime DateCreate { get; set; }
        public DateTime? DateOfPayment { get; set; }
        public String Status { get; set; }
    }
}
