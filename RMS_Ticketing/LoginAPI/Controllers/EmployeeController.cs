using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CMSDAL;
using CMS_DTO.Entity.RMS_Ticketing;

namespace LoginAPI.Controllers
{
    [RoutePrefix("Api/Employee")]
    public class EmployeeController : ApiController
    {
        private CMSUserMasterContext db = new CMSUserMasterContext();

        // GET: api/Employee
        public IQueryable<Employee_Role> GetUserMaster()
        {
            return db.UserMaster;
        }
        [HttpGet]
        [Route("AllEmployeelimited")]
        public IHttpActionResult GetEmaployeelimited()
        {
            try
            {
               
                             
                  
                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }
        // GET: api/Employee/5
        [ResponseType(typeof(Employee_Role))]
        public IHttpActionResult GetEmployee_Role(int id)
        {
            Employee_Role employee_Role = db.UserMaster.Find(id);
            if (employee_Role == null)
            {
                return NotFound();
            }

            return Ok(employee_Role);
        }

        // PUT: api/Employee/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee_Role(int id, Employee_Role employee_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee_Role.ID)
            {
                return BadRequest();
            }

            db.Entry(employee_Role).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Employee_RoleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Employee
        [ResponseType(typeof(Employee_Role))]
        public IHttpActionResult PostEmployee_Role(Employee_Role employee_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserMaster.Add(employee_Role);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employee_Role.ID }, employee_Role);
        }

        // DELETE: api/Employee/5
        [ResponseType(typeof(Employee_Role))]
        public IHttpActionResult DeleteEmployee_Role(int id)
        {
            Employee_Role employee_Role = db.UserMaster.Find(id);
            if (employee_Role == null)
            {
                return NotFound();
            }

            db.UserMaster.Remove(employee_Role);
            db.SaveChanges();

            return Ok(employee_Role);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Employee_RoleExists(int id)
        {
            return db.UserMaster.Count(e => e.ID == id) > 0;
        }
    }
}