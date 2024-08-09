import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="status-code-wrapper">
        <img src="/bg-blue-line-error-1.svg" alt="" className="background bg-1" />
        <img src="/bg-blue-line-error-2.svg" alt="" className="background bg-2" />
        <img src="/bg-blue-line-error-1.svg" alt="" className="background bg-3" />
        <h1>{ error.status }</h1>
      </div>
      <p>
        {
          error.status === 404 ?
            "Oops, the page that you’re looking for doesn’t exists."
            :
            error.status === 500 ?
              "Sorry, seems like there's some server error... We'll fix it as soon as possible!"
              :
              <i>{error.statusText || error.message}</i>
        }
      </p>
      <a href="/" className="main-btn">Back to Homepage</a>
    </div>
  );
}