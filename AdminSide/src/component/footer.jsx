function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">© Petpal.</div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Crafted with <i className="fa-solid fa-heart"></i> by{" "}
                    <a
                      href="https://themesbrand.com/"
                      target="_blank"
                      className="text-reset"
                    >
                      Petpal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}
export default Footer