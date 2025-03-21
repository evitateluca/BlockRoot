"use client";
import Link from "next/link";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center min-h-screen bg-white dark:bg-[#1C1C25] dark:text-white w-[307px] border-r-2 dark:border-0 border-[#C0C5CB5E]">
      {/* sidebar logo */}
      <div className="flex p-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="31"
          viewBox="0 0 72 31"
          fill="none"
        >
          <g clip-path="url(#clip0_45_4510)">
            <path
              d="M51.2087 0.922607H71.5076L53.9767 30.4484H33.6777L51.2087 0.922607Z"
              fill="#2F80ED"
            />
            <path
              d="M32.755 0.922607H47.5179L29.987 30.4484H15.2241L32.755 0.922607Z"
              fill="#87BAFF"
            />
            <path
              d="M17.9924 0.922607H29.0645L11.5336 30.4484H0.461426L17.9924 0.922607Z"
              fill="#BFDAFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_45_4510">
              <rect
                width="71.9691"
                height="29.5258"
                fill="white"
                transform="translate(0 0.922607)"
              />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-2xl font-bold">
          <span className="text-blue">Block</span>
          <span>Roots.</span>
        </h1>
      </div>

      {/* side nav */}
      <nav className="flex flex-col p-10 space-y-2">
        <Link
          href={"/"}
          className="bg-[#D5E6FB] dark:bg-[#062141] text-primary rounded-lg"
        >
          <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.03517 8.94988H6.31164C6.79532 8.94988 7.19106 8.55414 7.19106 8.07047V1.03517C7.19106 0.551497 6.79532 0.155762 6.31164 0.155762H1.03517C0.551497 0.155762 0.155762 0.551497 0.155762 1.03517V8.07047C0.155762 8.55414 0.551497 8.94988 1.03517 8.94988ZM1.03517 15.9852H6.31164C6.79532 15.9852 7.19106 15.5894 7.19106 15.1058V11.5881C7.19106 11.1044 6.79532 10.7087 6.31164 10.7087H1.03517C0.551497 10.7087 0.155762 11.1044 0.155762 11.5881V15.1058C0.155762 15.5894 0.551497 15.9852 1.03517 15.9852ZM9.82929 15.9852H15.1058C15.5894 15.9852 15.9852 15.5894 15.9852 15.1058V8.07047C15.9852 7.58679 15.5894 7.19106 15.1058 7.19106H9.82929C9.34561 7.19106 8.94988 7.58679 8.94988 8.07047V15.1058C8.94988 15.5894 9.34561 15.9852 9.82929 15.9852ZM8.94988 1.03517V4.55282C8.94988 5.0365 9.34561 5.43223 9.82929 5.43223H15.1058C15.5894 5.43223 15.9852 5.0365 15.9852 4.55282V1.03517C15.9852 0.551497 15.5894 0.155762 15.1058 0.155762H9.82929C9.34561 0.155762 8.94988 0.551497 8.94988 1.03517Z"
                fill="#0060FF"
              />
            </svg>
            <span>Dashboard</span>
          </div>
        </Link>
        <Link
          href={"/"}
          className="hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg"
        >
          <div className="flex items-center gap-4 py-3 px-8 rounded-2xl font-medium w-[208px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                d="M3.99275 0.155762H2.01408V2.13444H0.0354004V14.0065H2.01408V15.9852H3.99275V14.0065H5.97143V2.13444H3.99275V0.155762ZM13.8861 4.11311H11.9075V0.155762H9.92878V4.11311H7.95011V11.0385H9.92878V15.9852H11.9075V11.0385H13.8861V4.11311Z"
                fill={theme == "dark" ? "white" : "black"}
              />
            </svg>
            <span className="">Markets</span>
          </div>
        </Link>
        <Link
          href={"/"}
          className="hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg"
        >
          <div className="flex items-center gap-4 py-3 px-8 rounded-2xl font-medium w-[208px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M16.509 6.551C16.5868 6.3633 16.6071 6.15676 16.5674 5.9575C16.5278 5.75825 16.4299 5.57524 16.2862 5.43163L11.1514 0.296875L9.69933 1.74898L13.0811 5.13073H0.155881V7.18463H15.5601C15.7632 7.18468 15.9618 7.12451 16.1307 7.01173C16.2996 6.89894 16.4312 6.73861 16.509 6.551V6.551ZM0.233929 9.87216C0.156184 10.0599 0.135859 10.2664 0.175527 10.4657C0.215195 10.6649 0.313073 10.8479 0.456777 10.9915L5.59153 16.1263L7.04364 14.6742L3.66189 11.2924H16.5871V9.23853H1.18283C0.979705 9.23834 0.781095 9.29846 0.612168 9.41126C0.443241 9.52406 0.311601 9.68447 0.233929 9.87216V9.87216Z"
                fill={theme == "dark" ? "white" : "black"}
              />
            </svg>
            <span>Transactions</span>
          </div>
        </Link>
        <Link
          href={"/"}
          className="hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg"
        >
          <div className="flex items-center gap-4 py-3 px-8 rounded-2xl font-medium w-[208px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
            >
              <path
                d="M14.4032 13.3561C14.0281 12.4675 13.4837 11.6604 12.8004 10.9797C12.1192 10.297 11.3122 9.75269 10.424 9.37683C10.416 9.37286 10.4081 9.37087 10.4001 9.36689C11.639 8.47201 12.4444 7.01435 12.4444 5.36976C12.4444 2.64536 10.2371 0.437988 7.51266 0.437988C4.78825 0.437988 2.58088 2.64536 2.58088 5.36976C2.58088 7.01435 3.38627 8.47201 4.62518 9.36888C4.61723 9.37286 4.60928 9.37484 4.60132 9.37882C3.71042 9.75467 2.91099 10.2936 2.22492 10.9816C1.54225 11.6629 0.997951 12.4699 0.622093 13.358C0.25285 14.2276 0.0537095 15.1598 0.0354501 16.1043C0.0349193 16.1256 0.0386421 16.1467 0.0463991 16.1664C0.0541561 16.1862 0.0657904 16.2042 0.0806164 16.2194C0.0954425 16.2346 0.11316 16.2467 0.132726 16.2549C0.152291 16.2632 0.173309 16.2674 0.19454 16.2674H1.38771C1.47521 16.2674 1.54481 16.1978 1.5468 16.1123C1.58657 14.5771 2.20305 13.1393 3.29281 12.0495C4.42036 10.922 5.91779 10.3015 7.51266 10.3015C9.10753 10.3015 10.605 10.922 11.7325 12.0495C12.8223 13.1393 13.4387 14.5771 13.4785 16.1123C13.4805 16.1998 13.5501 16.2674 13.6376 16.2674H14.8308C14.852 16.2674 14.873 16.2632 14.8926 16.2549C14.9122 16.2467 14.9299 16.2346 14.9447 16.2194C14.9595 16.2042 14.9712 16.1862 14.9789 16.1664C14.9867 16.1467 14.9904 16.1256 14.9899 16.1043C14.97 15.1538 14.7731 14.2291 14.4032 13.3561V13.3561ZM7.51266 8.79019C6.59988 8.79019 5.7408 8.43423 5.0945 7.78793C4.4482 7.14162 4.09223 6.28254 4.09223 5.36976C4.09223 4.45699 4.4482 3.5979 5.0945 2.9516C5.7408 2.3053 6.59988 1.94934 7.51266 1.94934C8.42544 1.94934 9.28452 2.3053 9.93082 2.9516C10.5771 3.5979 10.9331 4.45699 10.9331 5.36976C10.9331 6.28254 10.5771 7.14162 9.93082 7.78793C9.28452 8.43423 8.42544 8.79019 7.51266 8.79019Z"
                fill={theme == "dark" ? "white" : "black"}
              />
            </svg>
            <span>Profile</span>
          </div>
        </Link>
        <Link
          href={"/"}
          className="hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg"
        >
          <div className="flex items-center gap-4 py-3 px-8 rounded-2xl font-medium w-[208px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M8.92396 0.579103C9.15666 0.579103 9.36481 0.723942 9.44317 0.940805L10.0019 2.48971C10.2022 2.53958 10.3739 2.58944 10.5196 2.64168C10.6787 2.69866 10.8836 2.78493 11.1369 2.90286L12.4381 2.21428C12.5443 2.15801 12.6659 2.1377 12.7846 2.1564C12.9034 2.17509 13.0128 2.23178 13.0966 2.31796L14.2411 3.50121C14.393 3.65872 14.4358 3.88903 14.3503 4.09007L13.7401 5.52025C13.8414 5.70625 13.9221 5.86534 13.9838 5.9983C14.0503 6.14314 14.1326 6.34259 14.2308 6.59982L15.653 7.20925C15.8667 7.30027 15.9989 7.51397 15.9847 7.7427L15.8802 9.38501C15.8731 9.4917 15.8348 9.59395 15.77 9.67907C15.7053 9.76419 15.617 9.82844 15.5161 9.86384L14.169 10.3427C14.1303 10.5287 14.0899 10.6878 14.0472 10.8223C13.9782 11.0301 13.8995 11.2345 13.8113 11.4349L14.488 12.9308C14.5358 13.0359 14.5486 13.1535 14.5247 13.2665C14.5008 13.3794 14.4413 13.4817 14.355 13.5584L13.0681 14.7076C12.9834 14.783 12.8776 14.8307 12.765 14.8443C12.6524 14.8578 12.5383 14.8367 12.4381 14.7836L11.1116 14.0808C10.9041 14.1907 10.69 14.2877 10.4705 14.3713L9.89114 14.5881L9.37669 16.0128C9.33856 16.1171 9.26979 16.2075 9.1794 16.272C9.089 16.3366 8.9812 16.3723 8.87014 16.3745L7.36635 16.4085C7.25235 16.4115 7.14022 16.3791 7.0454 16.3157C6.95058 16.2524 6.87772 16.1612 6.83686 16.0547L6.23059 14.4504C6.02374 14.3797 5.81893 14.3032 5.61641 14.2209C5.45077 14.1492 5.28763 14.0719 5.12728 13.989L3.62349 14.6317C3.5244 14.6739 3.41516 14.6865 3.30907 14.6678C3.20297 14.6491 3.1046 14.6 3.02593 14.5264L1.91312 13.4824C1.83027 13.4051 1.77384 13.3036 1.75183 13.1924C1.72981 13.0812 1.74332 12.9658 1.79044 12.8627L2.43707 11.4539C2.35107 11.287 2.27134 11.117 2.19805 10.9442C2.11249 10.7327 2.03331 10.5186 1.96061 10.3023L0.543873 9.87097C0.428715 9.83616 0.328272 9.7643 0.258144 9.66655C0.188016 9.5688 0.152128 9.45063 0.156053 9.33039L0.211456 7.80998C0.215399 7.71078 0.246388 7.61454 0.301072 7.53168C0.355756 7.44882 0.432053 7.38248 0.521712 7.33984L2.00809 6.62594C2.07695 6.37346 2.1371 6.17717 2.19013 6.03392C2.2648 5.84258 2.34772 5.65456 2.43865 5.47039L1.7944 4.10906C1.7455 4.00568 1.73066 3.88946 1.75199 3.77711C1.77332 3.66476 1.82974 3.56206 1.91312 3.4838L3.02434 2.43431C3.10224 2.36084 3.19971 2.31144 3.30502 2.29207C3.41033 2.27269 3.519 2.28416 3.61795 2.32509L5.12016 2.9456C5.28637 2.83479 5.43674 2.74536 5.57288 2.67333C5.73513 2.58706 5.95199 2.49684 6.22505 2.39949L6.74742 0.942388C6.78604 0.835752 6.85663 0.743635 6.94956 0.678615C7.04248 0.613596 7.15321 0.578843 7.26662 0.579103H8.92396ZM8.08975 6.13444C6.77037 6.13444 5.7011 7.19105 5.7011 8.49539C5.7011 9.79974 6.77037 10.8571 8.08975 10.8571C9.40834 10.8571 10.4776 9.79974 10.4776 8.49539C10.4776 7.19105 9.40914 6.13444 8.08975 6.13444Z"
                fill={theme == "dark" ? "white" : "black"}
              />
            </svg>
            <span>Settings</span>
          </div>
        </Link>

        <div className="border-t-[1.5px] border-[#E8EAECC7]"></div>

        <Link
          href={"/"}
          className="hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg"
        >
          <div className="flex items-center gap-4 py-3 px-8 rounded-2xl font-medium w-[208px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.07068 3.32178C7.24521 3.32282 6.45385 3.6512 5.87015 4.2349C5.28646 4.81859 4.95808 5.60995 4.95703 6.43542H6.53997C6.53997 5.59092 7.22697 4.90472 8.07068 4.90472C8.91438 4.90472 9.60138 5.59092 9.60138 6.43542C9.60138 6.90872 9.22068 7.25222 8.63895 7.72235C8.44891 7.87123 8.26638 8.02945 8.09205 8.19645C7.30216 8.98554 7.27921 9.82371 7.27921 9.9171V10.445H8.86215L8.86136 9.94401C8.86215 9.93135 8.88747 9.6385 9.21039 9.31638C9.32911 9.19766 9.4787 9.07893 9.63383 8.95388C10.2504 8.45446 11.1835 7.70019 11.1835 6.43542C11.1829 5.60996 10.8548 4.81848 10.2712 4.23472C9.68754 3.65095 8.89614 3.32262 8.07068 3.32178ZM7.27921 11.2365H8.86215V12.8194H7.27921V11.2365Z"
                fill={theme == "dark" ? "white" : "black"}
              />
              <path
                d="M8.07047 0.155762C3.7063 0.155762 0.155762 3.7063 0.155762 8.07047C0.155762 12.4346 3.7063 15.9852 8.07047 15.9852C12.4346 15.9852 15.9852 12.4346 15.9852 8.07047C15.9852 3.7063 12.4346 0.155762 8.07047 0.155762ZM8.07047 14.4022C4.57929 14.4022 1.7387 11.5616 1.7387 8.07047C1.7387 4.57929 4.57929 1.7387 8.07047 1.7387C11.5616 1.7387 14.4022 4.57929 14.4022 8.07047C14.4022 11.5616 11.5616 14.4022 8.07047 14.4022Z"
                fill={theme == "dark" ? "white" : "black"}
              />
            </svg>
            <span>Help</span>
          </div>
        </Link>
        <Link
          href={"/"}
          className=" dark:text-white hover:bg-red-300 dark:hover:bg-red-500 rounded-lg"
        >
          <div className="flex items-center gap-4 py-3 px-8 rounded-2xl font-medium w-[208px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M13.4675 3.81452L12.2276 5.05449L14.4965 7.33217H5.55284V9.09099H14.4965L12.2276 11.3599L13.4675 12.6086L17.8646 8.21158L13.4675 3.81452ZM2.03519 2.0557H9.07049V0.296875H2.03519C1.06784 0.296875 0.276367 1.08835 0.276367 2.0557V14.3675C0.276367 15.3348 1.06784 16.1263 2.03519 16.1263H9.07049V14.3675H2.03519V2.0557Z"
                fill={theme == "dark" ? "white" : "black"}
              />
            </svg>
            <span>Log Out</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
