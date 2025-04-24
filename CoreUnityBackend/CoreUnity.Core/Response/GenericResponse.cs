namespace CoreUnity.Core.Response
{
    public class GenericResponse<T>
    {

        public bool Status { get; set; }

        public string? Message { get; set; }

        public string? AlertType { get; set; }

        public string? RedirectUrl { get; set; }

        public T? Object { get; set; }

        public List<T>? ObjectList { get; set; }

    }
}
