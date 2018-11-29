namespace DAL.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DAL.dbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DAL.dbContext context)
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
}
