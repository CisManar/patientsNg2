using BLL;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace patientsApi.api
{
    //[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class myApiController : ApiController
    {
        // GET: api/myApi
        patientsService patientService = new patientsService();
        public IEnumerable<patient> Get()
        {
            return patientService.GetPatients();
        }

        // GET: api/myApi/5
        public patient Get(int id)
        {
            return patientService.GetPatient(id);
        }

        // POST: api/myApi
        public patient Post([FromBody]patient patient)
        {
            return patientService.addPatient(patient);
        }

        // PUT: api/myApi/5
        public patient Put(int id, [FromBody]patient patient)
        {
            return patientService.updatePatient(id, patient);
        }

        // DELETE: api/myApi/5
        public patient Delete(int id)
        {
            return patientService.deletePatient(id);
        }
    }
}
