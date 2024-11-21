 import i18n from "i18next"
 import { initReactI18next } from "react-i18next"

 const storedLanguage = localStorage.getItem('language') || 'en';

 i18n.use(initReactI18next).init({
    resources:{
        en: {
      translation: {

        
            "signin": {
                "title": "Log in to BitBlogs",
                "description": "Enter your credentials to access your account",
                "email_label": "Email",
                "password_label": "Password",
                "submit_button": "Log In",
                "forgot_password": "Forgot password?",
                "no_account": "Don't have an account?",
                "signup_link": "Sign up"
            },
            "signup": {
                "title": "Sign Up for BitBlogs",
                "description": "Create your account to start blogging",
                "name_label": "Name",
                "email_label": "Email",
                "password_label": "Password",
                "confirm_password_label": "Confirm Password",
                "submit_button": "Sign Up",
                "already_have_account": "Already have an account?",
                "login_link": "Log in"
            },
            "header": {
                "logo": "BitBlogs",
                "home": "Home",
                "write": "Write",
                "about": "About",
                "sign_in":"Sign in",
                "english":"English",
                "georgian":"ქართული",
                "light": "light",
                "dark":"dark",
                "system":"system",
            },
            "mainpage":{
                    "author": "Author",
                    "date": "Date",
                    "readTime": "Read Time",
                    "populartags": "Popular Tags",
                "featuredauthors": "Featured Aiuthors"
            }
            
      
    }
    },
    ka: {
      translation: {
       "signin": {
                "title": "შედით BitBlogs-ში",
                "description": "შეიყვანეთ თქვენი მონაცემები ანგარიშში შესასვლელად",
                "email_label": "მეილი",
                "password_label": "პაროლი",
                "submit_button": "შესვლა",
                "forgot_password": "დაგავიწყდათ პაროლი?",
                "no_account": "არ გაქვთ ანგარიში?",
                "signup_link": "რეგისტრაცია"
            },
            "signup": {
                "title": "დარეგისტრირდი BitBlogs-ში",
                "description": "შექმენი ანგარიში და დაიწყე ბლოგინგი",
                "name_label": "სახელი",
                "email_label": "მეილი",
                "password_label": "პაროლი",
                "confirm_password_label": "დაადასტურე პაროლი",
                "submit_button": "რეგისტრაცია",
                "already_have_account": "უკვე გაქვთ ანგარიში?",
                "login_link": "შესვლა"
            },
            "header": {
                "logo": "BitBlogs",
                "home": "სახლი",
                "write": "დაწერა",
                "about": "შესახებ",
                "sign_in":"შესვლა",
                "english":"English",
                "georgian":"ქართული",
                "light": "ნათელი",
                "dark":"ბნელი",
                "system":"სისტემა",
            },
            "mainpage":{
                "author": "ავტორი",
                "date": "თარიღი",
                "readTime": "კითხვის დრო",
                "populartags": "პოპულარული ტეგები",
                "featuredauthors": "გამორჩეული ავტორები"

            }
      },
     },
    },
    lng: storedLanguage, 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
 });