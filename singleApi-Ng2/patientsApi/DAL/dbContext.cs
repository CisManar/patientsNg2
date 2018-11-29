using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class dbContext : DbContext
    {
        public dbContext() : base("con")
        {
        }
        public DbSet<patient> patients { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<patient>().HasKey(p => p.ID);
        }
        
        /* 
        private class UniDBInitializer<T> : DropCreateDatabaseAlways<dbContext>
        {
            protected override void Seed(dbContext context)
            {

                IList<patient> patientsList = new List<patient>();

                patientsList.Add(new patient()
                {
                    fname = "Manar",
                    mname = "Mofed",
                    lname = "Sarah",
                    email = "m@m.com",
                    DOB = DateTime.Today,
                    gender = 2,
                    lastCheck = DateTime.Today,
                    status = 1,
                    Active = 0,
                    CreatedBy = 1,
                    creationDate = DateTime.Today

                });
                patientsList.Add(new patient()
                {
                    fname = "Anas",
                    mname = "Z ",
                    lname = "Qutaishat",
                    email = "anas@m.com",
                    DOB = DateTime.Today,
                    gender = 1,
                    lastCheck = DateTime.Today,
                    status = 2,
                    Active = 1,
                    CreatedBy = 1,
                    creationDate = DateTime.Today

                });


                foreach (patient p in patientsList)
                    context.patients.Add(p);
                base.Seed(context);
            }
        }
        */
    }
}
