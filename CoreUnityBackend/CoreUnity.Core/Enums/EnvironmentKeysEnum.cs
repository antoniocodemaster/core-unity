using System.ComponentModel;

namespace CoreUnity.Core.Enums
{
    enum EnvironmentKeysEnum
    {

        [Description("identity")]
        Identity = 1,

        [Description("prod")]
        Production = 2,

        [Description("dev")]
        Development = 3,

        [Description("docker")]
        Docker = 4,

        [Description("local")]
        Local = 5

    }
}
