using CoreUnity.Core.Enums;
using CoreUnity.Core.Extensions;

namespace CoreUnity.Core.Utils
{
    public static class AlertsUtils
    {

        public static string ConvertAlertTypeToString(object alertType)
        {
            try
            {
                if (alertType is AlertTypeEnum enumValue)
                {
                    return enumValue.GetDescription(); // Get enum description
                }

                if (alertType is string stringValue)
                {
                    return Enum.TryParse(typeof(AlertTypeEnum), stringValue, true, out var parsedEnum)
                        ? ((AlertTypeEnum)parsedEnum).GetDescription()
                        : stringValue; // If it does not match an enum, we use the original value.
                }

                throw new ArgumentException("Invalid alert type.");
            }
            catch (ArgumentException argEx)
            {
                throw new ArgumentException($"{argEx.Message}");
            }
        }

    }
}
