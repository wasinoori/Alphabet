const alphabetArabic = ['ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];
      const words = {
        'ا': ['آب', 'انار', 'انگور', 'آهو', 'اسب', 'آتش', 'آسمان', 'استاد', 'افغانستان', 'امید'],
        'ب': ['بابا', 'برف', 'بهار', 'باغ', 'بادام', 'بامیان', 'برادر', 'بازار', 'بلخ', 'بلبل'],
        'پ': ['پدر', 'پروانه', 'پسته', 'پنجشیر', 'پنجره', 'پیراهن', 'پلنگ', 'پیاله', 'پشم', 'پیاز'],
        'ت': ['توت', 'تاک', 'تخم', 'ترانه', 'تاجیک', 'تخار', 'تندر', 'تاریخ', 'تشناب', 'تربوز'],
        'ث': ['ثریا', 'ثروت', 'ثمر', 'ثانیه', 'ثبات', 'ثواب', 'ثلث', 'ثقل', 'ثنا', 'ثبت'],
        'ج': ['جان', 'جوزا', 'جنگل', 'جاده', 'جوانی', 'جوراب', 'جشن', 'جگر', 'جلال‌آباد', 'جمهوری'],
        'چ': ['چشم', 'چمن', 'چنار', 'چوب', 'چراغ', 'چای', 'چکش', 'چوپان', 'چاه', 'چادر'],
        'ح': ['حوت', 'حمل', 'حیوان', 'حکیم', 'حافظ', 'حج', 'حوض', 'حلیم', 'حلوا', 'حویلی'],
        'خ': ['خانه', 'خورشید', 'خربوزه', 'خواهر', 'خیابان', 'خاک', 'خرما', 'خوشه', 'خزان', 'خیال'],
        'د': ['دل', 'درخت', 'دریا', 'دوست', 'دانش', 'دست', 'دهقان', 'دشت', 'دره', 'دوغ'],
        'ذ': ['ذره', 'ذخیره', 'ذهن', 'ذکر', 'ذات', 'ذوق', 'ذلت', 'ذبح', 'ذرت', 'ذغال'],
        'ر': ['روز', 'رود', 'رنگ', 'روباه', 'راه', 'رمضان', 'رحمت', 'روشنی', 'رسم', 'ریش'],
        'ز': ['زمین', 'زندگی', 'زبان', 'زمستان', 'زنبور', 'زیبا', 'زعفران', 'زرد', 'زور', 'زن'],
        'ژ': ['ژاله', 'ژرف', 'ژنده', 'ژست', 'ژاکت', 'ژله', 'ژیان', 'ژاپن', 'ژرفا', 'ژنرال'],
        'س': ['سیب', 'ستاره', 'سنگ', 'سبزه', 'سرود', 'سفر', 'سمنگان', 'سرک', 'سرما', 'سایه'],
        'ش': ['شب', 'شیر', 'شاعر', 'شهر', 'شمال', 'شانه', 'شکر', 'شفتالو', 'شتر', 'شمع'],
        'ص': ['صبح', 'صلح', 'صدا', 'صابون', 'صنف', 'صندلی', 'صفحه', 'صحرا', 'صبر', 'صنعت'],
        'ض': ['ضرب', 'ضعیف', 'ضرورت', 'ضمیر', 'ضیا', 'ضامن', 'ضربه', 'ضلع', 'ضیافت', 'ضبط'],
        'ط': ['طوطی', 'طبیب', 'طلا', 'طالب', 'طفل', 'طاووس', 'طوفان', 'طلوع', 'طناب', 'طبیعت'],
        'ظ': ['ظرف', 'ظهر', 'ظلم', 'ظاهر', 'ظریف', 'ظفر', 'ظن', 'ظرافت', 'ظالم', 'ظلمت'],
        'ع': ['عید', 'عقاب', 'عسل', 'عدالت', 'عشق', 'علم', 'عقل', 'عطر', 'عینک', 'عروس'],
        'غ': ['غزل', 'غذا', 'غروب', 'غم', 'غزنی', 'غوری', 'غنچه', 'غار', 'غریب', 'غزال'],
        'ف': ['فیل', 'فرشته', 'فردا', 'فصل', 'فراه', 'فامیل', 'فرهنگ', 'فکر', 'فلم', 'فضا'],
        'ق': ['قلم', 'قلب', 'قند', 'قصه', 'قندهار', 'قهرمان', 'قاضی', 'قریه', 'قرآن', 'قفس'],
        'ک': ['کتاب', 'کابل', 'کوه', 'کبوتر', 'کندز', 'کاغذ', 'کفش', 'کلید', 'کارگر', 'کشور'],
        'گ': ['گل', 'گندم', 'گوسفند', 'گرگ', 'گیلاس', 'گردو', 'گوش', 'گرما', 'گاو', 'گنجشک'],
        'ل': ['لاله', 'لبخند', 'لغمان', 'لوگر', 'لیمو', 'لباس', 'لحظه', 'لانه', 'لذت', 'لطیف'],
        'م': ['مادر', 'ماه', 'مکتب', 'مزار', 'مهتاب', 'مرغ', 'موتر', 'مهربان', 'مسجد', 'میوه'],
        'ن': ['نان', 'نور', 'نوروز', 'ننگرهار', 'نیمروز', 'نقاش', 'نمک', 'نهال', 'نعنا', 'نماز'],
        'و': ['وطن', 'ورزش', 'وحدت', 'ولایت', 'وفا', 'وردک', 'وزیر', 'وقت', 'وجدان', 'ویولن'],
        'ه': ['هرات', 'هلمند', 'هندوانه', 'هوا', 'همدلی', 'هدیه', 'هنر', 'هفته', 'هما', 'هویت'],
        'ی': ['یار', 'یاقوت', 'یخ', 'یلدا', 'یاس', 'یک', 'یادگار', 'یونس', 'یوسف', 'یکتا']
      };
  
      let currentIndex = 0;
      let currentWordIndex = 0;
  
      function updateDisplay() {
        const currentLetter = alphabetArabic[currentIndex];
        const currentWords = words[currentLetter];
        currentWordIndex = Math.floor(Math.random() * currentWords.length);
        const currentWord = currentWords[currentWordIndex];
  
        document.getElementById('alphabet-display').textContent = currentLetter;
        document.getElementById('word-display').textContent = currentWord;
        document.getElementById('image-display').style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${currentWord.codePointAt(0).toString(16)}.svg')`;
        document.getElementById('progress').style.width = `${((currentIndex + 1) / alphabetArabic.length) * 100}%`;
      }
  
      function nextLetter() {
        currentIndex = (currentIndex + 1) % alphabetArabic.length;
        updateDisplay();
      }
  
      function previousLetter() {
        currentIndex = (currentIndex - 1 + alphabetArabic.length) % alphabetArabic.length;
        updateDisplay();
      }
  
      function changeTheme() {
        const theme = document.getElementById('theme-selector').value;
        const root = document.documentElement;
  
        switch (theme) {
          case 'warm':
            root.style.setProperty('--primary-color', '#FF5722');
            root.style.setProperty('--secondary-color', '#FF9800');
            root.style.setProperty('--accent-color', '#FFC107');
            root.style.setProperty('--text-color', '#3E2723');
            root.style.setProperty('--background-color', '#FFF3E0');
            break;
          case 'cool':
            root.style.setProperty('--primary-color', '#3F51B5');
            root.style.setProperty('--secondary-color', '#2196F3');
            root.style.setProperty('--accent-color', '#03A9F4');
            root.style.setProperty('--text-color', '#263238');
            root.style.setProperty('--background-color', '#E3F2FD');
            break;
          case 'pastel':
            root.style.setProperty('--primary-color', '#FFB6C1');
            root.style.setProperty('--secondary-color', '#98FB98');
            root.style.setProperty('--accent-color', '#87CEFA');
            root.style.setProperty('--text-color', '#696969');
            root.style.setProperty('--background-color', '#FFF0F5');
            break;
          default:
            root.style.setProperty('--primary-color', '#FF9800');
            root.style.setProperty('--secondary-color', '#FFC107');
            root.style.setProperty('--accent-color', '#4CAF50');
            root.style.setProperty('--text-color', '#333');
            root.style.setProperty('--background-color', '#FFF3E0');
        }
      }
  
      updateDisplay();