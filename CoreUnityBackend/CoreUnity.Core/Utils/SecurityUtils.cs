using System.Security.Cryptography;
using System.Text;

namespace CoreUnity.Core.Utils
{
    public static class SecurityUtils
    {
        /// <summary>
        /// Description: Encrypts a text string using the SHA256 technique.
        /// <para></para>
        /// <author>Created By: César Adolfo Solís Alvarez (CSOLIS).</author>
        /// <para></para>
        /// <since>Creation Date: 07/06/2024</since>
        /// </summary>
        /// <param name="text">Parameter text string to encrypt.</param>
        /// <returns>An encrypted text string.</returns>
        /// <exception cref="Exception">
        /// An exception occurs if the string received as a parameter is null or empty.
        /// </exception>
        public static string EncryptToSHA256(string? text)
        {
            if (!string.IsNullOrEmpty(text))
            {

                StringBuilder sb = new StringBuilder();

                using (SHA256 hash = SHA256.Create())
                {
                    Encoding encoding = Encoding.UTF8;

                    byte[] result = hash.ComputeHash(encoding.GetBytes(text));

                    foreach (byte b in result)
                    {
                        sb.Append(b.ToString("x2"));
                    }
                }
                return sb.ToString();
            }
            else
            {
                throw new Exception("La cadena de texto a encriptar no puede ser nula ni vacía.");
            }
        }

        /// <summary>
        /// Description: Generates a unique random text string using the GUID (Unique Identifier) technique.
        /// <para></para>
        /// <author>Created By: César Adolfo Solís Alvarez (CSOLIS).</author>
        /// <para></para>
        /// <since>Creation Date: 09/01/2025</since>
        /// </summary>
        /// <returns>A unique random text string.</returns>
        public static string GenerateRandomUniqueKey()
        {
            return Guid.NewGuid().ToString("N").Substring(0, 6);
        }

    }
}
