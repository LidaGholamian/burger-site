import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Footer: React.FC = () => {
  return (
    <div className="bg-base-25 text-cream pt-8 pb-5">
      <div className="w-[80%] pb-7 border-b-[2px] border-b-grey-content border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-14 ">
        {/* 1st part */}
        <div>
          {/* logo */}
          <div className="flex items-center text-white">
            <FaBurger className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold mr-2">
              BurgerBite
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-2 text-xs md:text-sm lg:text-sm xl:text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm">
            ta.gholamian@gmail.com
          </p>
          <p className="mt-2 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm">
            9352993146(98+)
          </p>
        </div>

        {/* 2nd part */}
        <div>
          <h3 className="text-[23px] font-semibold mb-3 text-white">وبلاگ</h3>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            آموش همبرگر خانگی
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            دستور پخت چوریتسو برگر
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            نکات مهم پخت همبرگر
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            چیزبرگر خوش با چه پنیری؟
          </p>
        </div>

        {/* 3d part */}
        <div>
          <h3 className="text-[23px] font-semibold mb-3 text-white">
            دسترسی آسان
          </h3>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            منو
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            وبلاگ
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            تماس با ما
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm cursor-pointer hover:text-warning">
            درباره ما
          </p>
        </div>

        {/* 4th part */}
        <div>
          <h3 className="text-[23px] font-semibold mb-3 text-white">
            ساعات کاری
          </h3>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm">
            شنبه تا پنجشنبه: 3 عصر تا 11 شب
          </p>
          <p className="mt-3 text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm">
            حمعه ها : 1 ظهر تا 12 شب
          </p>

          {/* social icons */}
          <div className="flex mt-4 items-center gap-5 text-lg">
            <FaFacebook className="w-8 h-8 text-primary" />
            <FaInstagram className="w-8 h-8 text-error" />
            <FaTwitter className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* copyright text */}
      <p className="text-white text-opacity-60 text-xs md:text-sm lg:text-sm xl:text-sm mt-4 w-[80%] mx-auto flex justify-center">
        تمام حقوق اين وب‌سايت نیز برای شرکت صنایع غذایی سمن (فروشگاه آنلاین بایت
        برگر) است.
      </p>
    </div>
  );
};
