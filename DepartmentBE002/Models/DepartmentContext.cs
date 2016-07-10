using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentBE002.Models
{
    public class DepartmentContext : DbContext
    {
        public DepartmentContext(DbContextOptions<DepartmentContext> options)
            : base(options)
        { }

        public DbSet<EventType> EventTypes { get; set; }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeAccount> EmployeesAccounts { get; set; }

        public DbSet<Deposit> Deposits { get; set; }
        public DbSet<DepartmentEvent> DepartmentEvents { get; set; }
        public DbSet<Expense> Expenses { get; set; }
    }
}
