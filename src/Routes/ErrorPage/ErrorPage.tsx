import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = createErrorMessage(error);
  console.error(error);

  function createErrorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === 'string') {
      return error;
    } else {
      console.error(error);
      return 'Unknown error';
    }
  }

  return (
    <div id="error-page" className="flex h-screen flex-col items-center justify-center ">
      <div className="m-4 rounded border bg-secondary p-10 md:w-1/2">
        <h1 className="text-h1 font-h1">Oops!</h1>
        <h3 className="my-2 text-h3 font-h3">Sorry, an unexpected error has occurred.</h3>
        <p className="my-2 text-primary">
          <i>{errorMessage}</i>
        </p>
      </div>
    </div>
  );
}
