using System.DirectoryServices.AccountManagement;

namespace CMSWebApp.Utility
{
    [DirectoryRdnPrefix("CN")]
    [DirectoryObjectClass("user")]
    public class UserPrincipalExtended : UserPrincipal
    {
        public UserPrincipalExtended(PrincipalContext context) : base(context)
        {
        }

        public UserPrincipalExtended(PrincipalContext context, string samAccountName, string password, bool enabled)
            : base(context, samAccountName, password, enabled)
        {
        }

        [DirectoryProperty("postOfficeBox")]
        public string PostOfficeBox
        {
            get
            {
                if (ExtensionGet("postOfficeBox").Length != 1)
                    return null;

                return (string)ExtensionGet("postOfficeBox")[0];
            }

            set
            {
                ExtensionSet("postOfficeBox", value);
            }
        }

        [DirectoryProperty("department")]
        public string Department
        {
            get
            {
                if (ExtensionGet("department").Length != 1)
                    return null;

                return (string)ExtensionGet("department")[0];
            }

            set
            {
                ExtensionSet("department", value);
            }
        }

        public static new UserPrincipalExtended FindByIdentity(PrincipalContext context, string identityValue)
        {
            return (UserPrincipalExtended)FindByIdentityWithType(context, typeof(UserPrincipalExtended), identityValue);
        }

        public static new UserPrincipalExtended FindByIdentity(PrincipalContext context, IdentityType identityType, string identityValue)
        {
            return (UserPrincipalExtended)FindByIdentityWithType(context, typeof(UserPrincipalExtended), identityType, identityValue);
        }
    }
}