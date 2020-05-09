using System.ComponentModel.DataAnnotations;

namespace LoginWebAPI.Models
{
    public class Credential
    {
        [Key]
        [MaxLength(100)]
        [Required]
        public string UserID { get; set; }
        [MaxLength(100)]
        [Required]
        public string Password { get; set; }
        
    }
}
