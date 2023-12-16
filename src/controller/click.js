export const addClickEventToItems = router => {
  const listContainer = document.querySelectorAll("li");
  listContainer.forEach(li => {
    li.addEventListener("click", () => {
      window.history.pushState({}, "", `/detail/${li.id}`);
      router.navigate(`/detail/${li.id}`);
    });
  });
};

export const addClickEventToLogo = router => {
  const logo = document.getElementById("header_logo_container");
  logo.addEventListener("click", e => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      router.navigate("/");
    }
    router.navigate("/");
  });
};
