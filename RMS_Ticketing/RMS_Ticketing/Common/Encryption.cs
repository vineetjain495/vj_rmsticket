
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace RMS_Ticketing.Common
{
    public class Encryption
    {
        private string SecretKey = "SMRTCKT2019_b14ca5898a4e4133bbce";

       // private string SecretKey = "1234567812345678";
        public  string EncryptString( string plainText)
        {
          //  byte[] iv = new byte[16];
            byte[] array;

            using (Aes aes = Aes.Create())
            {
            //   string SecretKey1 = "b14ca5898a4e4133bbce2ea2315a1916";
                aes.Key = Encoding.UTF8.GetBytes(SecretKey);
                byte[] passBytes = Encoding.UTF8.GetBytes(SecretKey);
                //set the initialization vector (IV) for the symmetric algorithm
                byte[] EncryptionkeyBytes = new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
                aes.Mode = CipherMode.ECB;
                //   aes.IV = iv;

                // aes.KeySize = 128;
                ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key,null);
                //ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter streamWriter = new StreamWriter((Stream)cryptoStream))
                        {
                            streamWriter.Write(plainText);
                        }

                        array = memoryStream.ToArray();
                    }
                }
            }

            return Convert.ToBase64String(array);
        }
        public  string DecryptString( string cipherText)
        {
         //   byte[] iv = new byte[16];
            byte[] buffer = Convert.FromBase64String(cipherText);

            using (Aes aes = Aes.Create())
            {
                aes.Mode = CipherMode.ECB;
                aes.Key = Encoding.UTF8.GetBytes(SecretKey);
            //    aes.IV = iv;
                ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key,null);

                using (MemoryStream memoryStream = new MemoryStream(buffer))
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader streamReader = new StreamReader((Stream)cryptoStream))
                        {
                            return streamReader.ReadToEnd();
                        }
                    }
                }
            }
        }
        ///// <summary>
        ///// Encrypt a string.
        ///// </summary>
        ///// <param name="plainText">String to be encrypted</param>
        ///// <param name="password">Password</param>
        //public  string Encrypt(string plainText)
        //{
        //    if (plainText == null)
        //    {
        //        return null;
        //    }
            
        //    //if (password == null)
        //    //{
        //    //    password = String.Empty;
        //    //}

        //    // Get the bytes of the string
        //    var bytesToBeEncrypted = Encoding.UTF8.GetBytes(plainText);
        //    var passwordBytes = Encoding.UTF8.GetBytes(SecretKey);

        //    // Hash the password with SHA256
        //    passwordBytes = SHA256.Create().ComputeHash(passwordBytes);
          
        //    var bytesEncrypted = Encryption.Encrypt(bytesToBeEncrypted, passwordBytes);

        //    return Convert.ToBase64String(bytesEncrypted);
        //}

        ///// <summary>
        ///// Decrypt a string.
        ///// </summary>
        ///// <param name="encryptedText">String to be decrypted</param>
        ///// <param name="password">Password used during encryption</param>
        ///// <exception cref="FormatException"></exception>
        //public string Decrypt(string encryptedText )
        //{
        //    if (encryptedText == null)
        //    {
        //        return null;
        //    }

          
            
                
        //    // Get the bytes of the string
        //    var bytesToBeDecrypted = Convert.FromBase64String(encryptedText);
        //    var passwordBytes = Encoding.UTF8.GetBytes(SecretKey);

        //    passwordBytes = SHA256.Create().ComputeHash(passwordBytes);

        //    var bytesDecrypted = Encryption.Decrypt(bytesToBeDecrypted, passwordBytes);

        //    return Encoding.UTF8.GetString(bytesDecrypted);
        //}
        //private static byte[] Encrypt(byte[] bytesToBeEncrypted, byte[] passwordBytes)
        //{
        //    byte[] encryptedBytes = null;

        //    // Set your salt here, change it to meet your flavor:
        //    // The salt bytes must be at least 8 bytes.
        //    var saltBytes = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };

        //    using (MemoryStream ms = new MemoryStream())
        //    {
        //        using (RijndaelManaged AES = new RijndaelManaged())
        //        {
        //            var key = new Rfc2898DeriveBytes(passwordBytes, saltBytes, 1000);

        //            AES.KeySize = 256;
        //            AES.BlockSize = 128;
        //            AES.Key = key.GetBytes(AES.KeySize / 8);
        //            AES.IV = key.GetBytes(AES.BlockSize / 8);

        //            AES.Mode = CipherMode.CBC;

        //            using (var cs = new CryptoStream(ms, AES.CreateEncryptor(), CryptoStreamMode.Write))
        //            {
        //                cs.Write(bytesToBeEncrypted, 0, bytesToBeEncrypted.Length);
        //                cs.Close();
        //            }

        //            encryptedBytes = ms.ToArray();
        //        }
        //    }

        //    return encryptedBytes;
        //}

        //private static byte[] Decrypt(byte[] bytesToBeDecrypted, byte[] passwordBytes)
        //{
        //    byte[] decryptedBytes = null;

        //    // Set your salt here, change it to meet your flavor:
        //    // The salt bytes must be at least 8 bytes.
        //    var saltBytes = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };

        //    using (MemoryStream ms = new MemoryStream())
        //    {
        //        using (RijndaelManaged AES = new RijndaelManaged())
        //        {
        //            var key = new Rfc2898DeriveBytes(passwordBytes, saltBytes, 1000);

        //            AES.KeySize = 256;
        //            AES.BlockSize = 128;
        //            AES.Key = key.GetBytes(AES.KeySize / 8);
        //            AES.IV = key.GetBytes(AES.BlockSize / 8);
        //            AES.Mode = CipherMode.CBC;

        //            using (var cs = new CryptoStream(ms, AES.CreateDecryptor(), CryptoStreamMode.Write))
        //            {
        //                cs.Write(bytesToBeDecrypted, 0, bytesToBeDecrypted.Length);
        //                cs.Close();
        //            }

        //            decryptedBytes = ms.ToArray();
        //        }
        //    }

        //    return decryptedBytes;
        //}
    }
}