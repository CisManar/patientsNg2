using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class patient
    {
        public int ID { get; set; }
        [Required]
        public string fname { get; set; }
        [Required]
        public string mname { get; set; }
        [Required]
        public string lname { get; set; }
        [Required]
        public string email { get; set; }
        public DateTime? DOB { get; set; }
        [Required]
        public int gender { get; set; }
        public DateTime? lastCheck { get; set; }
        [Required]
        public int status { get; set; }
        [Required]
        public int Active { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? creationDate { get; set; }

    }
}
