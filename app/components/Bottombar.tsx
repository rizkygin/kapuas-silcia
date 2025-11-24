export default function BottomBar() {
  return (
    <div className="relative h-svw md:h-100 -z-10">
      <img className="absolute bottom-0" src="/bottom7blur.png" alt="" />
      <div className="z-10 absolute bottom-0 ">
        <div className="flex justify-center items-center text-white">
          <div className="flex px-10">
            <div className="relative w-1/3 md:w1/2">
              <div className="h-12/12 w-1/12 bg-amber-400 bottom-5 -left-5 absolute -z-10 rounded-2xl opacity-55"></div>
              <span
                className="text-2xl md:text-5xl"
                style={{
                  fontFamily: 'Stack Sans Notch',
                }}
              >
                Stay <br></br>Connected <br></br> To Us
              </span>
            </div>
            <div className=" w-2/3 text-xs md:text-lg">
              <p>
                A global leader in sustainable palm oil, resource-based
                manufacturing, and renewables, we drive innovation, operational
                excellence, and environmental stewardship. Committed to our
                stakeholders, we create lasting value while empowering
                communities and preserving the planet for present and future
                generations.
              </p>
              <div className="flex my-3">
                <img
                  src="/logo-white.png"
                  alt=""
                  className="w-20 h-20 md:w-40 md:h-40"
                />
                <div className="flex flex-col">
                  <span
                    className="text-5xl"
                    style={{
                      fontFamily: 'Anton',
                      fontWeight: 400,
                      fontStyle: 'normal',
                    }}
                  >
                    Kapuas Silica
                  </span>
                  <span className="text-1xl">+62 822 - 5675 - 8702</span>
                  <span className="text-1xl">
                    andidarmaji@kapuassilica.co.id
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
