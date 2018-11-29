using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class patientsService
    {
        dbContext _db = new dbContext();
        public IEnumerable<patient> GetPatients()
        {
            return _db.patients;
        }
        public patient GetPatient(int id)
        {
            return _db.patients.FirstOrDefault(p=>p.ID == id);
        }
        public patient addPatient(patient patient)
        {
            _db.patients.Add(patient);
            _db.SaveChanges();
            return patient;
        }
        public patient updatePatient(int id,patient patient)
        {
            patient edited = GetPatient(id);

            edited.fname = patient.fname;
            edited.mname = patient.mname;
            edited.lname = patient.lname;
            edited.email = patient.email;
            edited.DOB = patient.DOB;
            edited.gender = patient.gender;
            edited.lastCheck = patient.lastCheck;
            edited.status = patient.status;
            edited.Active = patient.Active;
            edited.CreatedBy = patient.CreatedBy;
            edited.creationDate = patient.creationDate;

            _db.SaveChanges();

            return edited;
        }
        public patient deletePatient(int id)
        {
            patient deleted = GetPatient(id);
            _db.patients.Remove(deleted);

            _db.SaveChanges();

            return deleted;
        }
    }
}
