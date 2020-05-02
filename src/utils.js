const initOAuthWindow = (provider, onSuccess) => () => {
  let url =
    process.env.NODE_ENV === "development"
      ? "localhost:4000"
      : window.location.host;

  window.open(
    `${window.location.protocol}//${url}/auth/${provider}`,
    "__blank",
    "width=500&height=800"
  );
  window.addEventListener("message", (event) => {
    if (event.data === "success") {
      onSuccess();
    }
  });
};

export { initOAuthWindow };
