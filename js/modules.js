/* House of J&S · Inspire Computing International Year 8.
   Lesson order is taken from the supplied Pearson Year 8 Student Book contents.
   Myanmar teaching explanations are original companion notes, not Pearson translations. */
window.HJS_UNITS = [
  {
    "id": 1,
    "title": "Binary and online graphics",
    "myTitle": "Binary နှင့် Online Graphics",
    "range": "Student Book pp. 2–22",
    "accent": "violet",
    "overview": "This unit explores vector graphics and coordinate instructions, bitmap images and pixels, the differences between image types, binary pixel patterns, colour depth, digital image properties and binary addition.",
    "overviewMy": "ဤယူနစ်တွင် Vector Graphic နှင့် Coordinate ညွှန်ကြားချက်များ၊ Bitmap ပုံများနှင့် Pixel များ၊ ပုံအမျိုးအစားနှစ်မျိုး၏ ကွာခြားချက်၊ Binary pixel ပုံစံ၊ Colour depth၊ Digital image properties နှင့် Binary addition တို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain how vector graphics are created from coordinates and drawing instructions.",
        "Coordinate နှင့် Drawing instruction များဖြင့် Vector graphic ဖန်တီးပုံကို ရှင်းပြနိုင်ရန်။"
      ],
      [
        "Compare vector and bitmap graphics and select a suitable type for a scenario.",
        "အခြေအနေတစ်ခုအတွက် သင့်တော်သော Vector/Bitmap ကို ရွေးချယ်နှိုင်းယှဉ်နိုင်ရန်။"
      ],
      [
        "Explain how pixels, resolution and colour depth affect image quality and file size.",
        "Pixel၊ Resolution နှင့် Colour depth တို့က Image quality နှင့် File size အပေါ် သက်ရောက်ပုံကို ရှင်းပြရန်။"
      ],
      [
        "Represent simple bitmap images in binary and perform binary addition.",
        "ရိုးရှင်းသော Bitmap ပုံများကို Binary ဖြင့် ဖော်ပြပြီး Binary addition ပြုလုပ်နိုင်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Vector graphics",
        "A vector graphic is described by instructions rather than a fixed grid of coloured pixels. A drawing can be built from shapes and lines using coordinates, a start point, an end point, line type, curves or angles, and line and fill colours. Because the computer stores the drawing instructions, a vector can normally be scaled up or down without the same loss of sharpness seen in a bitmap. Vector graphics are suited to geometric shapes, logos and illustrations that need editing or resizing. The Student Book illustrates coordinate plotting and scale changes in its early Unit 1 examples.",
        "Vector graphic သည် အရောင် Pixel ဇယားတစ်ခုအစား ပုံဆွဲရန် ညွှန်ကြားချက်များဖြင့် ဖော်ပြထားသော Graphic ဖြစ်သည်။ Coordinate များ၊ Start point၊ End point၊ Line type၊ Curve/Angle နှင့် Line/Fill colour များကို သုံး၍ ဖန်တီးနိုင်သည်။ ညွှန်ကြားချက်များအဖြစ် သိမ်းထားသောကြောင့် အရွယ်အစားကြီး/သေး ပြောင်းရာတွင် Bitmap ကဲ့သို့ ပြတ်သားမှု မပျောက်လွယ်ပါ။ Logo နှင့် Geometric shape များအတွက် သင့်တော်သည်။",
        "Choose the start and end coordinates, add any middle points or radius instructions, then specify line and fill colours.",
        "Start/End coordinate များရွေးပါ။ လိုအပ်ပါက အလယ်မှတ် သို့မဟုတ် Radius ထည့်ပြီး Line နှင့် Fill colour သတ်မှတ်ပါ။"
      ],
      [
        "Creating a vector graphic",
        "A vector graphic can be plotted like a dot-to-dot drawing. Coordinates describe where a point is placed on the X and Y axes. A simple line needs a start and end point; a polygon may need several vertices. Curves and circles may use a centre and radius. The Year 8 Workbook uses coordinate grids and examples such as triangles and rectangles, and asks learners to complete missing coordinates. A graphics plotter can follow instructions to draw a shape.",
        "Vector graphic ကို Dot-to-dot ပုံဆွဲသကဲ့သို့ Coordinate များဖြင့် ဆွဲနိုင်သည်။ X နှင့် Y ဝင်ရိုးပေါ်တွင် အမှတ်တစ်ခု၏ တည်နေရာကို Coordinate ဖြင့် ဖော်ပြသည်။ Line တစ်ကြောင်းတွင် Start/End လိုအပ်ပြီး Polygon တွင် Vertex အများအပြားလိုနိုင်သည်။ Circle တွင် Centre နှင့် Radius ကို သတ်မှတ်နိုင်သည်။",
        "Plot each coordinate on the grid, connect points in the given order, close the shape if required, and apply the specified fill colour.",
        "Grid ပေါ်တွင် Coordinate များကို Plot လုပ်ပါ။ သတ်မှတ်ထားသော အစီအစဉ်အတိုင်း ဆက်ပါ။ လိုအပ်ပါက Shape ကို ပိတ်ပြီး Fill colour ထည့်ပါ။"
      ],
      [
        "Bitmaps",
        "A bitmap (raster image) is made from a grid of dots called pixels. Each pixel stores a colour. More pixels can represent more detail, but the file can become larger. Bitmap images are commonly created by digital cameras or scanners and are suitable for photographs and detailed original images. Common bitmap file types listed in the Workbook include BMP, JPG, GIF, TIFF, PNG and PICT.",
        "Bitmap (Raster image) သည် Pixel ဟုခေါ်သော အစက်ငယ်များ ဇယားကွက်ဖြင့် ဖွဲ့စည်းထားသည်။ Pixel တစ်ခုစီတွင် အရောင်တန်ဖိုး သိမ်းထားသည်။ Pixel ပိုများလျှင် အသေးစိတ် ပိုဖော်ပြနိုင်သော်လည်း File size ကြီးနိုင်သည်။ Digital camera နှင့် Scanner မှ ရရှိသော ဓာတ်ပုံများအတွက် အသုံးများသည်။",
        "Open a photograph and zoom in until individual pixels become visible. Compare the detail at different zoom levels.",
        "ဓာတ်ပုံတစ်ပုံဖွင့်ပြီး Pixel တစ်ခုချင်း မြင်ရသည်အထိ Zoom ချဲ့ပါ။ Zoom level မတူသည့်အခါ အသေးစိတ်ကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Comparing vectors and bitmaps",
        "Vector images are usually compact for simple shapes and can be resized without losing their defined edges. Bitmap images are better suited to photographs, subtle colour changes and complex textures, but stretching them can make pixels visible and reduce quality. The Workbook compares file size, image quality, scaling and use of colour. Software examples include Illustrator, Inkscape and Vectr for vectors, and Photoshop, GIMP and Paint.NET for bitmaps.",
        "ရိုးရှင်းသော Shape များအတွက် Vector သည် File သေးငယ်ပြီး အရွယ်အစားပြောင်းသော်လည်း အနားသတ်ပြတ်သားမှုကို ထိန်းထားနိုင်သည်။ Bitmap သည် ဓာတ်ပုံ၊ အရောင်ပြောင်းလဲမှုနူးညံ့သော ပုံများနှင့် Texture ရှုပ်ထွေးသောပုံများအတွက် သင့်တော်သော်လည်း ချဲ့ဆွဲလျှင် Pixel များ ပေါ်လာနိုင်သည်။",
        "Select a vector for a scalable logo and a bitmap for a detailed photograph; explain the reasons using the scenario.",
        "အရွယ်အစားအမျိုးမျိုး သုံးမည့် Logo အတွက် Vector၊ အသေးစိတ်ဓာတ်ပုံအတွက် Bitmap ရွေးပြီး အကြောင်းပြချက်ကို ရေးပါ။"
      ],
      [
        "Binary and pixels",
        "Computers represent data using binary digits 0 and 1. A bitmap can be represented by a sequence of bits in which each bit corresponds to a pixel. In the Workbook's simple black-and-white examples, 1 represents black and 0 represents white. Reading the rows in a consistent order creates a binary word that describes the image. More complex patterns require more bits or more bits per pixel.",
        "ကွန်ပျူတာသည် Data ကို Binary digit 0 နှင့် 1 ဖြင့် ကိုယ်စားပြုသည်။ Bitmap ပုံတစ်ပုံကို Pixel တစ်ခုစီနှင့် သက်ဆိုင်သော Bit အစဉ်အဖြစ် ဖော်ပြနိုင်သည်။ Workbook ၏ အဖြူ/အမည်း ဥပမာတွင် 1 သည် အမည်း၊ 0 သည် အဖြူကို ကိုယ်စားပြုသည်။ Row များကို သတ်မှတ်ထားသော အစီအစဉ်အတိုင်း ဖတ်ပါက ပုံကို ဖော်ပြသော Binary word ရရှိသည်။",
        "Read a grid left to right and top to bottom, write 1 for black and 0 for white, then join the bits into a binary sequence.",
        "Grid ကို ဘယ်မှညာ၊ အပေါ်မှအောက် ဖတ်ပါ။ အမည်းကို 1၊ အဖြူကို 0 ရေးပြီး Bit များကို Binary sequence အဖြစ် ဆက်ပါ။"
      ],
      [
        "Colour depth and binary representation",
        "Colour depth is the number of bits used to represent the colour of each pixel. With n bits, the number of possible values is 2 to the power n. The Student Book and Workbook illustrate that 1 bit represents 2 colours, 2 bits represent 4, and 8 bits represent 256. More bits allow more shades and colours but require more storage for the same number of pixels.",
        "Colour depth သည် Pixel တစ်ခု၏ အရောင်ကို ဖော်ပြရန် အသုံးပြုသော Bit အရေအတွက်ဖြစ်သည်။ n Bit ရှိလျှင် ဖြစ်နိုင်သော Value အရေအတွက်မှာ 2 ၏ n ထပ်ကိန်းဖြစ်သည်။ 1 Bit သည် အရောင် 2 မျိုး၊ 2 Bit သည် 4 မျိုး၊ 8 Bit သည် 256 မျိုး ဖော်ပြနိုင်သည်။ Bit ပိုများလျှင် အရောင်ပိုစုံသော်လည်း သိမ်းဆည်းရမည့် Data ပိုများသည်။",
        "Calculate 2ⁿ for the bit depth and explain how doubling the available bits changes the number of representable colours.",
        "Bit depth အတွက် 2ⁿ ကိုတွက်ပါ။ Bit အရေအတွက် တိုးလာလျှင် ဖော်ပြနိုင်သော အရောင်အရေအတွက် ဘယ်လိုပြောင်းလဲကြောင်း ရှင်းပြပါ။"
      ],
      [
        "Digital image properties",
        "Pixel size is the total number of pixels in an image. Dimensions describe width and height in pixels. Resolution describes pixel density; the Workbook uses pixels per inch (PPI), while printing quality is commonly discussed in dots per inch (DPI). Colour depth describes the number of bits used for each pixel. A simple uncompressed image estimate uses: file size in bits = total pixels × colour depth. Larger pixel dimensions or a greater colour depth increase file size.",
        "Pixel size သည် ပုံအတွင်း Pixel စုစုပေါင်းအရေအတွက်ဖြစ်သည်။ Dimension သည် Pixel ဖြင့်ဖော်ပြသော အကျယ်နှင့် အမြင့်ဖြစ်သည်။ Resolution သည် Pixel သိပ်သည်းမှုဖြစ်ပြီး Workbook တွင် PPI ကို သုံးထားသည်။ Printing အတွက် DPI ဟုလည်း သုံးသည်။ Colour depth သည် Pixel တစ်ခုအတွက် Bit အရေအတွက်ဖြစ်သည်။ ရိုးရှင်းသော Uncompressed ပုံ၏ File size (bits) = Total pixels × Colour depth ဖြစ်သည်။",
        "Multiply width by height to obtain total pixels, then multiply by bits per pixel. Include units and state that compression may change the stored size.",
        "အကျယ် × အမြင့် ဖြင့် Pixel စုစုပေါင်းတွက်ပါ။ ထို့နောက် Pixel တစ်ခုအတွက် Bit အရေအတွက်ဖြင့် မြှောက်ပါ။ Unit ထည့်ရေးပြီး Compression ကြောင့် သိမ်းထားသော Size ပြောင်းနိုင်ကြောင်း ဖော်ပြပါ။"
      ],
      [
        "Binary addition",
        "Binary addition follows place-value rules using only 0 and 1. The four basic cases are 0+0=0, 1+0=1, 1+1=10 (write 0 and carry 1), and 1+1+1=11. Work from the least significant bit at the right towards the left, carrying when needed. An 8-bit unsigned value ranges from 0 to 255; a result beyond the available range cannot be represented in eight bits without an additional bit.",
        "Binary addition တွင် 0 နှင့် 1 ကိုသာ သုံးသည်။ အခြေခံစည်းမျဉ်းများမှာ 0+0=0၊ 1+0=1၊ 1+1=10 (0 ရေးပြီး 1 Carry လုပ်) နှင့် 1+1+1=11 ဖြစ်သည်။ ညာဘက်ဆုံး Bit မှ ဘယ်ဘက်သို့ တွက်ပြီး လိုအပ်ပါက Carry လုပ်ပါ။ 8-bit unsigned တန်ဖိုးသည် 0 မှ 255 အထိဖြစ်ပြီး ထိုထက်ကျော်သောရလဒ်ကို Bit ရှစ်လုံးတည်းဖြင့် မဖော်ပြနိုင်ပါ။",
        "Align the binary digits, add each column from right to left, write the result bit and carry to the next column.",
        "Binary digit များကို တန်းညှိပါ။ ညာဘက်မှ စ၍ Column တစ်ခုချင်းပေါင်းပြီး Result bit ကို ရေးကာ Carry ကို နောက် Column သို့ ပို့ပါ။"
      ]
    ],
    "terms": [
      [
        "Vector graphics",
        "Images defined by drawing instructions such as coordinates, lines and shapes.",
        "Coordinate၊ Line နှင့် Shape ညွှန်ကြားချက်များဖြင့် ဖော်ပြထားသော ပုံ။"
      ],
      [
        "Coordinate",
        "A pair of values that identifies a position on a grid.",
        "Grid ပေါ်ရှိ တည်နေရာကို သတ်မှတ်သော တန်ဖိုးအတွဲ။"
      ],
      [
        "X-axis",
        "The horizontal axis of a coordinate grid.",
        "Coordinate grid ၏ အလျားလိုက် ဝင်ရိုး။"
      ],
      [
        "Y-axis",
        "The vertical axis of a coordinate grid.",
        "Coordinate grid ၏ ဒေါင်လိုက် ဝင်ရိုး။"
      ],
      [
        "Start point",
        "The coordinate where a drawing instruction begins.",
        "ပုံဆွဲညွှန်ကြားချက် စတင်သည့် Coordinate။"
      ],
      [
        "End point",
        "The coordinate where a line or drawing instruction finishes.",
        "Line သို့မဟုတ် ပုံဆွဲညွှန်ကြားချက် အဆုံးသတ်သည့် Coordinate။"
      ],
      [
        "Vertex",
        "A point where line segments meet to form a shape.",
        "Shape ဖွဲ့စည်းရန် Line segment များ ဆုံသောအမှတ်။"
      ],
      [
        "Line type",
        "The style of line used in a vector graphic.",
        "Vector graphic တွင် အသုံးပြုသော Line ပုံစံ။"
      ],
      [
        "Fill colour",
        "The colour used inside a closed shape.",
        "ပိတ်ထားသော Shape အတွင်း ဖြည့်သည့်အရောင်။"
      ],
      [
        "Radius",
        "The distance from the centre of a circle to its edge.",
        "Circle ၏ Centre မှ အနားသို့ အကွာအဝေး။"
      ],
      [
        "Scaling",
        "Changing the size of an image or object.",
        "ပုံ/အရာဝတ္ထု၏ အရွယ်အစားပြောင်းခြင်း။"
      ],
      [
        "Vector software",
        "Software used to create or edit vector drawings.",
        "Vector drawing ဖန်တီး/ပြင်ဆင်သည့် Software။"
      ],
      [
        "Bitmap",
        "An image stored as a grid of pixels.",
        "Pixel ဇယားကွက်အဖြစ် သိမ်းထားသော ပုံ။"
      ],
      [
        "Raster image",
        "Another name for an image made from pixels.",
        "Pixel များဖြင့် ဖွဲ့စည်းထားသော ပုံ။"
      ],
      [
        "Pixel",
        "A small picture element in a digital image.",
        "Digital image ရှိ ပုံရိပ်အစိတ်အပိုင်းအသေးစား။"
      ],
      [
        "Resolution",
        "The amount or density of pixel information in an image.",
        "ပုံအတွင်း Pixel အချက်အလက် အရေအတွက်/သိပ်သည်းမှု။"
      ],
      [
        "Pixels per inch (PPI)",
        "A measure of pixel density per inch.",
        "တစ်လက်မအတွင်း Pixel အရေအတွက်ကို တိုင်းတာသော Unit။"
      ],
      [
        "Dots per inch (DPI)",
        "A measure often used for printer dot density.",
        "Printer ၏ တစ်လက်မအတွင်း Dot အရေအတွက်ကို ဖော်ပြသော Unit။"
      ],
      [
        "Gradient",
        "A gradual change from one colour to another.",
        "အရောင်တစ်မျိုးမှ တစ်မျိုးသို့ တဖြည်းဖြည်း ပြောင်းလဲမှု။"
      ],
      [
        "Image quality",
        "How clear and detailed an image appears.",
        "ပုံ၏ ကြည်လင်မှုနှင့် အသေးစိတ်အဆင့်။"
      ],
      [
        "Colour depth",
        "The number of bits used to represent each pixel colour.",
        "Pixel တစ်ခု၏ အရောင်ကို ဖော်ပြရန် အသုံးပြုသော Bit အရေအတွက်။"
      ],
      [
        "Bit",
        "A binary digit with a value of 0 or 1.",
        "0 သို့မဟုတ် 1 တန်ဖိုးရှိသော Binary digit။"
      ],
      [
        "Binary word",
        "A group or sequence of binary digits used for a purpose.",
        "ရည်ရွယ်ချက်တစ်ခုအတွက် အုပ်စုဖွဲ့ထားသော Binary digit အစဉ်။"
      ],
      [
        "Binary addition",
        "Adding binary values using base-two rules.",
        "Base-two စည်းမျဉ်းဖြင့် Binary တန်ဖိုးများ ပေါင်းခြင်း။"
      ],
      [
        "Carry bit",
        "A bit moved to the next column during addition.",
        "ပေါင်းရာတွင် နောက် Column သို့ ပို့သော Bit။"
      ],
      [
        "File size",
        "The amount of storage needed to hold a file.",
        "ဖိုင်တစ်ခု သိမ်းရန် လိုအပ်သော Storage ပမာဏ။"
      ],
      [
        "BMP",
        "A bitmap image file format.",
        "Bitmap ပုံဖိုင် Format တစ်မျိုး။"
      ],
      [
        "JPEG",
        "A common compressed bitmap image format, often used for photos.",
        "ဓာတ်ပုံများအတွက် အသုံးများသော Compressed bitmap format။"
      ],
      [
        "PNG",
        "A bitmap image format that supports lossless compression and transparency.",
        "Lossless compression နှင့် Transparency ထောက်ပံ့သော Bitmap format။"
      ],
      [
        "GIF",
        "A bitmap format that can support simple animation.",
        "ရိုးရှင်းသော Animation ကို ထောက်ပံ့နိုင်သော Bitmap format။"
      ],
      [
        "TIFF",
        "An image file format used in high-quality image workflows.",
        "အရည်အသွေးမြင့် ပုံလုပ်ငန်းစဉ်များတွင် အသုံးပြုသော Image format။"
      ]
    ],
    "examples": [
      "A logo that must be enlarged for a billboard and reduced for a phone icon is usually better created as a vector graphic.",
      "A 20 × 10 pixel image has 200 pixels. At 3 bits per pixel its uncompressed data is 200 × 3 = 600 bits.",
      "In a 2-bit image, each pixel can represent 2² = 4 possible colours."
    ],
    "examplesMy": [
      "Billboard နှင့် ဖုန်း Icon နှစ်မျိုးလုံးတွင် အရွယ်အစားပြောင်းသုံးမည့် Logo အတွက် Vector graphic က ပိုသင့်တော်သည်။",
      "20 × 10 Pixel ပုံတွင် Pixel 200 ရှိသည်။ Pixel တစ်ခုလျှင် 3 Bit ဆိုလျှင် 200 × 3 = 600 Bit ဖြစ်သည်။",
      "2-bit ပုံတွင် Pixel တစ်ခုစီသည် 2² = 4 ရောင်အထိ ကိုယ်စားပြုနိုင်သည်။"
    ],
    "table": {
      "caption": "Vector, bitmap and binary image properties",
      "headers": [
        "Property",
        "Vector graphic",
        "Bitmap image"
      ],
      "rows": [
        [
          "Basic structure",
          "Drawing instructions and coordinates",
          "Grid of coloured pixels"
        ],
        [
          "Scaling",
          "Usually remains sharp",
          "May become pixelated"
        ],
        [
          "Best suited to",
          "Logos and geometric art",
          "Photographs and detailed textures"
        ],
        [
          "Colour information",
          "Line and fill properties",
          "Colour value stored per pixel"
        ],
        [
          "File size",
          "Often small for simple shapes",
          "Depends on dimensions and colour depth"
        ]
      ]
    },
    "activities": [
      [
        "Coordinate plotting",
        "Create a triangle by plotting three supplied coordinates and joining them in order. Record its fill colour.",
        "ပေးထားသော Coordinate သုံးခုကို Plot လုပ်ပြီး အစဉ်လိုက်ဆက်ကာ Triangle တစ်ခု ဖန်တီးပါ။ Fill colour ကို မှတ်ပါ။"
      ],
      [
        "Bitmap investigation",
        "Zoom into two images with different resolutions and record which preserves detail better.",
        "Resolution မတူသော ပုံနှစ်ပုံကို Zoom ချဲ့ပြီး မည်သည့်ပုံက အသေးစိတ် ပိုထိန်းထားနိုင်သည်ကို မှတ်ပါ။"
      ],
      [
        "Binary pixel art",
        "Design a small 8 × 8 black-and-white icon, write its 0/1 grid and decode it.",
        "8 × 8 အဖြူအမည်း Icon တစ်ခု ဖန်တီးပြီး 0/1 Grid ရေးကာ ပြန်လည်ဖော်ထုတ်ပါ။"
      ],
      [
        "File-size calculation",
        "Calculate the uncompressed file size for images with different pixel dimensions and colour depths.",
        "Pixel dimension နှင့် Colour depth မတူသော ပုံများ၏ Uncompressed file size ကို တွက်ပါ။"
      ]
    ],
    "slides": [
      "Vector graphics and coordinate plotting",
      "Creating and scaling vector shapes",
      "Bitmaps, pixels and image quality",
      "Comparing vector and raster formats",
      "Binary representation of pixels",
      "Colour depth and the 2ⁿ rule",
      "Pixel dimensions, resolution and file size",
      "Binary addition and carrying"
    ],
    "essays": [
      [
        "Explain why a vector graphic is suitable for a logo that must be printed at many sizes.",
        "A vector is based on drawing instructions and coordinates, so it can be scaled up or down without the same loss of sharpness as a bitmap. It is easy to edit and suits geometric shapes commonly used in logos.",
        [
          "coordinates",
          "scaling",
          "without losing quality",
          "easy to edit",
          "geometric shapes"
        ]
      ],
      [
        "Compare a bitmap and a vector image for a photograph and a sports logo.",
        "A bitmap is suitable for a photograph because it stores detailed pixel colours and can show realistic textures. A vector is suitable for a sports logo because shapes and lines can be scaled for different uses without losing edge quality.",
        [
          "bitmap",
          "pixels",
          "photograph",
          "vector",
          "scaled"
        ]
      ],
      [
        "Explain the relationship between colour depth and the number of possible colours.",
        "The number of possible colour values is 2 to the power of the bits per pixel. For example, 1 bit gives 2 colours, 2 bits give 4, and 8 bits give 256.",
        [
          "2 to the power",
          "bits per pixel",
          "1 bit",
          "2 colours",
          "256"
        ]
      ],
      [
        "Calculate the uncompressed size of an image that is 20 pixels wide, 10 pixels high and uses 3 bits per pixel.",
        "Total pixels = 20 × 10 = 200. File size = 200 × 3 = 600 bits, before any compression or file-format overhead.",
        [
          "20 × 10",
          "200",
          "3 bits",
          "600 bits",
          "uncompressed"
        ]
      ]
    ]
  },
  {
    "id": 2,
    "title": "Data on the Web",
    "myTitle": "Web ပေါ်ရှိ Data များ",
    "range": "Student Book pp. 24–44",
    "accent": "gold",
    "overview": "This unit develops digital storage units and capacity, binary and denary calculations, Scratch power calculations, internet bandwidth, transfer-time calculations, compression and Run Length Encoding.",
    "overviewMy": "ဤယူနစ်တွင် Digital storage unit နှင့် Capacity၊ Binary/Denary တွက်ချက်မှု၊ Scratch ဖြင့် Power calculator ဖန်တီးခြင်း၊ Internet bandwidth၊ Transfer time တွက်ချက်မှု၊ Compression နှင့် Run Length Encoding တို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain the relationships between bits, bytes, nibbles and storage units.",
        "Bit၊ Byte၊ Nibble နှင့် Storage unit များ၏ ဆက်နွယ်မှုကို ရှင်းပြရန်။"
      ],
      [
        "Convert between binary and denary and use powers in a simple calculator.",
        "Binary နှင့် Denary ပြောင်းလဲပြီး ရိုးရှင်းသော Calculator တွင် Power များ အသုံးပြုရန်။"
      ],
      [
        "Explain bandwidth and calculate a simple transfer time.",
        "Bandwidth ကို ရှင်းပြပြီး Transfer time ကို တွက်ချက်ရန်။"
      ],
      [
        "Compare lossy and lossless compression and describe Run Length Encoding.",
        "Lossy/Lossless compression ကို နှိုင်းယှဉ်ပြီး Run Length Encoding ကို ရှင်းပြရန်။"
      ]
    ],
    "lessons": [
      [
        "Bits, bytes and nibbles",
        "A bit is the smallest unit of binary data and can be 0 or 1. A nibble contains 4 bits and a byte contains 8 bits. Two nibbles make one byte. Storage and transmission measurements use larger units built from bytes or bits, so learners must check whether a value is written in bits (b) or bytes (B).",
        "Bit သည် Binary data ၏ အသေးဆုံး Unit ဖြစ်ပြီး 0 သို့မဟုတ် 1 ဖြစ်နိုင်သည်။ Nibble တစ်ခုတွင် Bit 4 ခု၊ Byte တစ်ခုတွင် Bit 8 ခု ပါဝင်သည်။ Nibble နှစ်ခုသည် Byte တစ်ခုနှင့် ညီသည်။ Storage နှင့် Transmission တိုင်းတာမှုတွင် bit (b) နှင့် byte (B) ကို ခွဲခြားဖတ်ရမည်။",
        "Convert bytes to bits by multiplying by 8; convert bits to bytes by dividing by 8.",
        "Byte မှ Bit ပြောင်းရန် 8 ဖြင့် မြှောက်ပါ။ Bit မှ Byte ပြောင်းရန် 8 ဖြင့် စားပါ။"
      ],
      [
        "Storage capacity",
        "Storage capacity describes how much data a device or medium can hold. Binary-based units such as KiB, MiB and GiB use powers of 1024: 1 KiB = 1024 bytes, 1 MiB = 1024 KiB, and 1 GiB = 1024 MiB. Decimal units such as kB and MB use powers of 1000. Always read the unit prefix and check whether the question specifies binary or decimal units.",
        "Storage capacity သည် Device သို့မဟုတ် Medium တစ်ခုတွင် Data ဘယ်လောက် သိမ်းနိုင်သည်ကို ဖော်ပြသည်။ KiB၊ MiB၊ GiB ကဲ့သို့ Binary unit များတွင် 1024 ကို အခြေခံသည်။ 1 KiB = 1024 Byte၊ 1 MiB = 1024 KiB၊ 1 GiB = 1024 MiB ဖြစ်သည်။ kB၊ MB ကဲ့သို့ Decimal unit များတွင် 1000 ကို သုံးသည်။",
        "Write the given unit, select 1000 or 1024 as appropriate, and show each conversion step.",
        "ပေးထားသော Unit ကို ဖတ်ပါ။ သင့်တော်သလို 1000 သို့မဟုတ် 1024 ရွေးပြီး Conversion အဆင့်များကို ပြပါ။"
      ],
      [
        "Binary and denary",
        "Binary is a base-2 number system using only 0 and 1. Denary (decimal) is base 10 and uses digits 0 to 9. Binary place values increase as powers of two. To convert binary to denary, add the place values where a 1 appears. To convert denary to binary, express the number as a sum of powers of two.",
        "Binary သည် 0 နှင့် 1 ကိုသာ သုံးသော Base-2 စနစ်ဖြစ်သည်။ Denary (Decimal) သည် 0 မှ 9 အထိ သုံးသော Base-10 စနစ်ဖြစ်သည်။ Binary Place value များသည် 2 ၏ ထပ်ကိန်းများဖြစ်သည်။ Binary မှ Denary ပြောင်းရာတွင် 1 ရှိသည့် Place value များကို ပေါင်းပါ။ Denary မှ Binary ပြောင်းရာတွင် 2 ၏ ထပ်ကိန်းများဖြင့် ပေါင်းစပ်ဖော်ပြပါ။",
        "Write place values over each binary digit, total the selected values and verify by converting back.",
        "Binary digit တစ်ခုစီအပေါ် Place value ရေးပြီး ရွေးထားသောတန်ဖိုးများ ပေါင်းပါ။ ပြန်ပြောင်း၍ စစ်ဆေးပါ။"
      ],
      [
        "Creating a 'power of' calculator",
        "The Student Book's project applies a power operation through a visual programming calculator. In Scratch, a user can be asked for a base and exponent, store the responses in variables, calculate the result with the power operator and display it. The design should clearly label inputs and output and should test ordinary and boundary values.",
        "ဤ Project တွင် Visual programming calculator ဖြင့် Power operation ပြုလုပ်သည်။ Scratch တွင် Base နှင့် Exponent ကို Ask block ဖြင့် မေးနိုင်ပြီး Variable ထဲ သိမ်းကာ Power operator ဖြင့် Result တွက်၍ ပြသနိုင်သည်။ Input နှင့် Output ကို ရှင်းလင်းစွာ Label တပ်ပြီး သာမန်တန်ဖိုးနှင့် အစွန်းတန်ဖိုးများကို စမ်းသပ်ရမည်။",
        "Create variables for base, exponent and answer; ask for values, calculate base raised to exponent, then display the result.",
        "Base၊ Exponent နှင့် Answer Variable ဖန်တီးပါ။ တန်ဖိုးများမေးပါ။ Base ကို Exponent ထပ်ကိန်းတင်၍ တွက်ပြီး Result ပြပါ။"
      ],
      [
        "Internet bandwidth",
        "Bandwidth is the amount of data a connection can transfer in a unit of time, commonly expressed in bits per second. It describes capacity rather than the size of one file. Actual transfer speed may be affected by network congestion, signal quality, distance, server performance and other users sharing the connection. A bottleneck is the slowest part restricting the whole transfer.",
        "Bandwidth သည် ချိတ်ဆက်မှုတစ်ခုက အချိန်တစ်ယူနစ်အတွင်း ပို့နိုင်သည့် Data ပမာဏဖြစ်ပြီး bits per second ဖြင့် ဖော်ပြလေ့ရှိသည်။ File size နှင့် မတူဘဲ ချိတ်ဆက်မှု၏ Capacity ကို ဖော်ပြသည်။ အမှန်တကယ် Transfer speed သည် Congestion၊ Signal quality၊ အကွာအဝေး၊ Server နှင့် အသုံးပြုသူများစွာ မျှဝေသုံးစွဲခြင်းတို့ကြောင့် ပြောင်းလဲနိုင်သည်။ Bottleneck သည် လုပ်ငန်းတစ်ခုလုံးကို နှေးစေသော အနှေးဆုံးအပိုင်းဖြစ်သည်။",
        "Identify whether the question gives file size in bits or bytes and bandwidth in bits per second before calculating.",
        "တွက်ချက်မီ File size သည် Bit/Byte ဘယ်ယူနစ်ဖြင့် ရှိသည်၊ Bandwidth သည် တစ်စက္ကန့်လျှင် Bit ဘယ်လောက်ဖြစ်သည်ကို စစ်ဆေးပါ။"
      ],
      [
        "Creating a bandwidth calculator",
        "A bandwidth calculator models the relationship between file size, bandwidth and transfer time. When units are consistent, transfer time in seconds is file size in bits divided by bandwidth in bits per second. A spreadsheet or visual program can accept two values and calculate the third, with validation to prevent zero or negative inputs.",
        "Bandwidth calculator သည် File size၊ Bandwidth နှင့် Transfer time တို့၏ ဆက်နွယ်မှုကို တွက်ချက်သည်။ Unit များ တူညီပါက Transfer time (seconds) = File size (bits) ÷ Bandwidth (bits per second) ဖြစ်သည်။ Spreadsheet သို့မဟုတ် Visual program ဖြင့် တန်ဖိုးနှစ်ခု ထည့်ပြီး တတိယတန်ဖိုးတွက်နိုင်သည်။ Zero သို့မဟုတ် အနုတ် Input များကို စစ်ဆေးရမည်။",
        "Convert a file size to bits if necessary, divide by bandwidth, and label the output in seconds.",
        "လိုအပ်ပါက File size ကို Bit ပြောင်းပါ။ Bandwidth ဖြင့်စားပြီး Output ကို Seconds ဖြင့် Label တပ်ပါ။"
      ],
      [
        "Compression",
        "Compression reduces the amount of data needed to store or transmit a file. Lossless compression allows the original data to be reconstructed exactly. Lossy compression permanently removes some information to achieve a smaller file, which may reduce quality. The choice depends on the data and how accurately it must be recovered; for example, important records need exact recovery.",
        "Compression သည် File သိမ်းရန် သို့မဟုတ် ပို့ရန် လိုအပ်သော Data ပမာဏကို လျှော့ချသည်။ Lossless compression သည် မူရင်း Data ကို အတိအကျ ပြန်လည်ရရှိစေသည်။ Lossy compression သည် File သေးစေရန် အချက်အလက်အချို့ကို အပြီးတိုင် ဖယ်ရှားပြီး Quality ကျနိုင်သည်။ ဘယ်နည်းရွေးမလဲဆိုသည်မှာ Data အမျိုးအစားနှင့် မူရင်းအတိုင်း ပြန်ရရန် လိုအပ်မှုအပေါ် မူတည်သည်။",
        "Choose lossless for files that must be restored exactly and assess acceptable quality loss before using lossy compression.",
        "မူရင်းအတိုင်း ပြန်ရရန်လိုသော ဖိုင်များအတွက် Lossless ရွေးပါ။ Lossy သုံးမီ လက်ခံနိုင်သော Quality loss ကို စဉ်းစားပါ။"
      ],
      [
        "Run Length Encoding",
        "Run Length Encoding (RLE) is a lossless compression method that replaces a run of repeated symbols with the symbol and a count. For example, the sequence BBBB can be represented as 4B. It is effective when data contains long runs of the same value, but may not reduce the size of data with few repetitions.",
        "Run Length Encoding (RLE) သည် ထပ်နေသော Symbol အစုကို Symbol နှင့် အကြိမ်ရေဖြင့် အစားထိုးသော Lossless compression နည်းလမ်းဖြစ်သည်။ ဥပမာ BBBB ကို 4B ဟု ဖော်ပြနိုင်သည်။ တူညီသော Value များ ဆက်တိုက်များသော Data အတွက် သင့်တော်သော်လည်း ထပ်နေမှုနည်းသော Data တွင် File size မလျှော့နိုင်ပါ။",
        "Scan the sequence, count each consecutive run, and write the count followed by its symbol.",
        "Sequence ကို အစဉ်လိုက်ဖတ်ပါ။ ဆက်တိုက်ထပ်နေသော Symbol အရေအတွက်ကို ရေတွက်ပြီး အရေအတွက်နောက်တွင် Symbol ရေးပါ။"
      ]
    ],
    "terms": [
      [
        "Bit",
        "A binary digit with a value of zero or one.",
        "0 သို့မဟုတ် 1 တန်ဖိုးရှိသော Binary digit။"
      ],
      [
        "Byte",
        "A unit containing eight bits.",
        "Bit ရှစ်ခုပါဝင်သော Data unit။"
      ],
      [
        "Nibble",
        "A group of four bits.",
        "Bit လေးခုပါဝင်သော အုပ်စု။"
      ],
      [
        "Bit rate",
        "The number of bits transferred per second.",
        "တစ်စက္ကန့်လျှင် ပို့သော Bit အရေအတွက်။"
      ],
      [
        "Storage capacity",
        "The amount of data a storage device can hold.",
        "Storage device တစ်ခု သိမ်းနိုင်သော Data ပမာဏ။"
      ],
      [
        "KiB",
        "A kibibyte equal to 1024 bytes.",
        "Byte 1024 နှင့် ညီသော Kibibyte။"
      ],
      [
        "MiB",
        "A mebibyte equal to 1024 KiB.",
        "KiB 1024 နှင့် ညီသော Mebibyte။"
      ],
      [
        "GiB",
        "A gibibyte equal to 1024 MiB.",
        "MiB 1024 နှင့် ညီသော Gibibyte။"
      ],
      [
        "kB",
        "A decimal kilobyte commonly defined as 1000 bytes.",
        "Byte 1000 နှင့် ညီသော Decimal kilobyte။"
      ],
      [
        "MB",
        "A decimal megabyte commonly defined as 1000 kB.",
        "kB 1000 နှင့် ညီသော Decimal megabyte။"
      ],
      [
        "GB",
        "A decimal gigabyte commonly defined as 1000 MB.",
        "MB 1000 နှင့် ညီသော Decimal gigabyte။"
      ],
      [
        "Binary number system",
        "A base-2 system using digits zero and one.",
        "0 နှင့် 1 ကိုသုံးသော Base-2 ဂဏန်းစနစ်။"
      ],
      [
        "Denary",
        "The base-10 number system using digits zero to nine.",
        "0 မှ 9 အထိသုံးသော Base-10 စနစ်။"
      ],
      [
        "Place value",
        "The value represented by a digit position in a number.",
        "ဂဏန်းတစ်နေရာ၏ တန်ဖိုး။"
      ],
      [
        "Power",
        "Repeated multiplication of a base by itself, indicated by an exponent.",
        "Base ကို ထပ်ခါမြှောက်ခြင်းကို ဖော်ပြသော ထပ်ကိန်း။"
      ],
      [
        "Exponent",
        "The number showing how many times a base is used as a factor.",
        "Base ကို ဘယ်နှစ်ကြိမ် မြှောက်ရမည်ကို ဖော်ပြသော ကိန်း။"
      ],
      [
        "Base",
        "The number that is raised to a power.",
        "ထပ်ကိန်းတင်ရာတွင် အခြေခံသော ကိန်း။"
      ],
      [
        "Calculator",
        "A program or device that performs calculations.",
        "တွက်ချက်မှု ပြုလုပ်ပေးသော Program/စက်။"
      ],
      [
        "Scratch",
        "A visual programming environment using blocks.",
        "Block များဖြင့် Program ရေးသော Visual programming environment။"
      ],
      [
        "Variable",
        "A named storage location for a value that may change.",
        "ပြောင်းလဲနိုင်သော Value သိမ်းထားသည့် အမည်ပေးနေရာ။"
      ],
      [
        "Operator",
        "A symbol or block that performs an operation.",
        "လုပ်ဆောင်ချက် ပြုလုပ်သော သင်္ကေတ/Block။"
      ],
      [
        "Bandwidth",
        "The capacity of a connection to transfer data per unit time.",
        "အချိန်တစ်ယူနစ်အတွင်း Data ပို့နိုင်သော ချိတ်ဆက်မှု Capacity။"
      ],
      [
        "Throughput",
        "The actual rate at which data is transferred.",
        "အမှန်တကယ် Data ပို့ဆောင်နိုင်သောနှုန်း။"
      ],
      [
        "Bottleneck",
        "The slowest part that limits the performance of a system.",
        "စနစ်တစ်ခု၏ စွမ်းဆောင်ရည်ကို ကန့်သတ်သော အနှေးဆုံးအပိုင်း။"
      ],
      [
        "Data transfer rate",
        "The amount of data moved in a unit of time.",
        "အချိန်တစ်ယူနစ်အတွင်း ရွှေ့ပြောင်းသော Data ပမာဏ။"
      ],
      [
        "Download",
        "Receiving data from another computer or server.",
        "အခြားကွန်ပျူတာ/Server မှ Data လက်ခံခြင်း။"
      ],
      [
        "Upload",
        "Sending data from a local device to another system.",
        "မိမိစက်မှ အခြားစနစ်သို့ Data ပို့ခြင်း။"
      ],
      [
        "Compression",
        "Reducing the amount of data needed to store or send a file.",
        "ဖိုင်သိမ်း/ပို့ရန် လိုသော Data ပမာဏ လျှော့ချခြင်း။"
      ],
      [
        "Lossy compression",
        "Compression that permanently removes some information.",
        "အချက်အလက်အချို့ကို အပြီးတိုင် ဖယ်ရှားသော Compression။"
      ],
      [
        "Lossless compression",
        "Compression that allows exact reconstruction of the original data.",
        "မူရင်း Data ကို အတိအကျ ပြန်ရစေသော Compression။"
      ],
      [
        "Run Length Encoding (RLE)",
        "A lossless method that stores repeated values as a count and symbol.",
        "ထပ်နေသော Value ကို အရေအတွက်နှင့် Symbol ဖြင့် သိမ်းသော Lossless နည်းလမ်း။"
      ],
      [
        "Run",
        "A consecutive sequence of identical symbols or values.",
        "တူညီသော Symbol/Value များ ဆက်တိုက်ရှိသော အစု။"
      ]
    ],
    "examples": [
      "A file of 4096 bytes contains 4096 × 8 = 32,768 bits.",
      "An uncompressed 24,000,000-bit file sent at 2,000,000 bits per second takes 12 seconds, before network overhead.",
      "The run BBBBBBBB can be encoded as 8B using Run Length Encoding."
    ],
    "examplesMy": [
      "4096 Byte ရှိသော ဖိုင်တွင် 4096 × 8 = 32,768 Bit ပါဝင်သည်။",
      "24,000,000 Bit ဖိုင်ကို 2,000,000 Bit/s ဖြင့်ပို့လျှင် Network overhead မပါမီ 12 စက္ကန့် ကြာမည်။",
      "BBBBBBBB ကို Run Length Encoding ဖြင့် 8B ဟု ဖော်ပြနိုင်သည်။"
    ],
    "table": {
      "caption": "Digital storage and data transfer reference",
      "headers": [
        "Concept",
        "Rule / formula",
        "Example"
      ],
      "rows": [
        [
          "Nibble",
          "4 bits",
          "Two nibbles = one byte"
        ],
        [
          "Byte",
          "8 bits",
          "3 bytes = 24 bits"
        ],
        [
          "Binary capacity",
          "1 KiB = 1024 bytes",
          "2 KiB = 2048 bytes"
        ],
        [
          "Decimal capacity",
          "1 kB = 1000 bytes",
          "5 kB = 5000 bytes"
        ],
        [
          "Transfer time",
          "File size (bits) ÷ rate (bits/s)",
          "24 Mb ÷ 2 Mb/s = 12 s"
        ],
        [
          "Colour/image compression",
          "Lossless / lossy",
          "Exact restore / quality may reduce"
        ]
      ]
    },
    "activities": [
      [
        "Unit conversion drill",
        "Convert 3 bytes to bits, 2 KiB to bytes and 16 bits to nibbles. Show each step.",
        "3 Byte ကို Bit၊ 2 KiB ကို Byte နှင့် 16 Bit ကို Nibble ပြောင်းပြီး အဆင့်တိုင်း ပြပါ။"
      ],
      [
        "Binary conversion cards",
        "Create ten denary/binary pairs and check each conversion by converting back.",
        "Denary/Binary အတွဲ ၁၀ ခု ဖန်တီးပြီး ပြန်ပြောင်းကာ အဖြေစစ်ပါ။"
      ],
      [
        "Bandwidth calculator",
        "Build a Scratch or spreadsheet calculator that finds transfer time from file size and bandwidth.",
        "File size နှင့် Bandwidth မှ Transfer time တွက်ပေးသော Scratch သို့မဟုတ် Spreadsheet Calculator တစ်ခု ဖန်တီးပါ။"
      ],
      [
        "Compression test",
        "Encode repeated strings with RLE and compare the original length with the encoded length.",
        "ထပ်နေသော String များကို RLE ဖြင့် Encode လုပ်ပြီး မူရင်းအရှည်နှင့် Encoded အရှည် နှိုင်းယှဉ်ပါ။"
      ]
    ],
    "slides": [
      "Bits, bytes and nibbles",
      "Binary and decimal storage capacity units",
      "Binary and denary number conversion",
      "Building a power calculator in Scratch",
      "Bandwidth and data-transfer capacity",
      "Calculating transfer time",
      "Lossy and lossless compression",
      "Run Length Encoding worked example"
    ],
    "essays": [
      [
        "Explain the difference between a bit, nibble and byte.",
        "A bit is one binary digit. A nibble is a group of four bits. A byte is a group of eight bits, so one byte contains two nibbles.",
        [
          "binary digit",
          "four bits",
          "eight bits",
          "two nibbles"
        ]
      ],
      [
        "A file is 24 megabits and the connection transfers 2 megabits per second. Calculate the ideal transfer time.",
        "Transfer time = file size ÷ bandwidth = 24 Mb ÷ 2 Mb/s = 12 seconds, assuming consistent units and no overhead.",
        [
          "file size",
          "bandwidth",
          "divide",
          "12 seconds",
          "consistent units"
        ]
      ],
      [
        "Compare lossy and lossless compression and give a suitable use for each.",
        "Lossless compression preserves all original information so the file can be reconstructed exactly, suitable for important records or data. Lossy compression removes some information permanently and may reduce quality, suitable where a smaller file is more important than perfect reconstruction.",
        [
          "lossless",
          "exactly",
          "lossy",
          "permanently",
          "quality"
        ]
      ],
      [
        "Describe how Run Length Encoding reduces a repeated sequence.",
        "RLE counts consecutive identical symbols and stores a count with the symbol. For example, BBBBBBBB becomes 8B. It works best when long runs of repeated values occur.",
        [
          "counts",
          "consecutive",
          "symbol",
          "8B",
          "repeated"
        ]
      ]
    ]
  },
  {
    "id": 3,
    "title": "Processing Data",
    "myTitle": "Data များကို လုပ်ဆောင်ခြင်း",
    "range": "Student Book pp. 46–72",
    "accent": "emerald",
    "overview": "This unit connects computer hardware and wearable technology with logo design, spreadsheet construction, formulas and functions, spreadsheet modelling, environmental impact, data communication, surveys and advanced spreadsheet functions.",
    "overviewMy": "ဤယူနစ်တွင် Computer hardware နှင့် Wearable technology၊ Logo design၊ Spreadsheet တည်ဆောက်ခြင်း၊ Formula/Function၊ Spreadsheet modelling၊ ပတ်ဝန်းကျင်အပေါ် သက်ရောက်မှု၊ Data တင်ပြခြင်း၊ Survey နှင့် Advanced spreadsheet function များကို လေ့လာမည်။",
    "objectives": [
      [
        "Identify key computer hardware and explain the role of common components.",
        "အဓိက Computer hardware များကို ခွဲခြားပြီး Component များ၏ လုပ်ဆောင်ချက်ကို ရှင်းပြရန်။"
      ],
      [
        "Describe wearable technology and consider its uses and risks.",
        "Wearable technology နှင့် အသုံးပြုမှု/အန္တရာယ်များကို ဖော်ပြရန်။"
      ],
      [
        "Design a logo and create spreadsheets using formulas, functions and models.",
        "Logo တစ်ခု ဒီဇိုင်းဆွဲပြီး Formula၊ Function နှင့် Model များပါသော Spreadsheet ဖန်တီးရန်။"
      ],
      [
        "Collect, analyse and present data while considering environmental impact.",
        "Data စုဆောင်း၊ ခွဲခြမ်း၊ တင်ပြရာတွင် ပတ်ဝန်းကျင်အပေါ် သက်ရောက်မှုကို ထည့်သွင်းစဉ်းစားရန်။"
      ]
    ],
    "lessons": [
      [
        "Computer hardware",
        "Computer hardware means the physical parts of a computer system. Examples include a monitor, keyboard, mouse, hard drive, motherboard, power supply unit (PSU), CPU, memory, video card and sound card. The CPU processes instructions; memory holds data currently needed by programs; storage keeps data when power is off; the motherboard connects components; and the PSU supplies electrical power. Hardware works with software, which provides programs and instructions.",
        "Computer hardware ဆိုသည်မှာ Computer system ၏ ရုပ်ပိုင်းဆိုင်ရာ အစိတ်အပိုင်းများဖြစ်သည်။ ဥပမာ Monitor၊ Keyboard၊ Mouse၊ Hard drive၊ Motherboard၊ PSU၊ CPU၊ Memory၊ Video card နှင့် Sound card တို့ဖြစ်သည်။ CPU သည် Instruction များကို Process လုပ်ပြီး Memory သည် လက်ရှိအသုံးပြုနေသော Data ကို ယာယီသိမ်းသည်။ Storage သည် မီးပိတ်ပြီးနောက် Data ကို ဆက်လက်သိမ်းထားသည်။",
        "Identify each physical component and connect it to its main role: processing, temporary memory, storage, input, output or power.",
        "Component တစ်ခုစီကို ခွဲခြားပြီး Processing၊ Temporary memory၊ Storage၊ Input၊ Output သို့မဟုတ် Power လုပ်ဆောင်ချက်နှင့် ချိတ်ဆက်ပါ။"
      ],
      [
        "Wearable technology",
        "Wearable technology includes electronic devices worn on the body, such as smartwatches, smart glasses, fitness trackers and connected clothing. They can collect sensor data, display notifications, support communication, monitor activity and sometimes support payments or augmented/virtual reality experiences. Design considerations include comfort, battery life, reliability, cost, accessibility and the privacy and security of collected personal data.",
        "Wearable technology သည် ကိုယ်ခန္ဓာပေါ်တွင် ဝတ်ဆင်အသုံးပြုသော Electronic device များဖြစ်သည်။ Smartwatch၊ Smart glasses၊ Fitness tracker နှင့် Connected clothing တို့ပါဝင်သည်။ Sensor data စုဆောင်းခြင်း၊ Notification ပြခြင်း၊ Communication၊ လှုပ်ရှားမှုစောင့်ကြည့်ခြင်းနှင့် Payment စသည့်လုပ်ငန်းများ ဆောင်ရွက်နိုင်သည်။ သက်တောင့်သက်သာရှိမှု၊ Battery life၊ စျေးနှုန်း၊ Data privacy နှင့် Security တို့ကို စဉ်းစားရမည်။",
        "Choose one wearable device, list the data it collects, its useful functions and one privacy risk.",
        "Wearable device တစ်ခုရွေးပါ။ ၎င်းစုဆောင်းသော Data၊ အသုံးဝင်သော Function နှင့် Privacy risk တစ်ခုကို စာရင်းပြုစုပါ။"
      ],
      [
        "Logo design",
        "A logo is a visual identity for a product, organisation or service. A design brief should identify the product or service, intended audience, name, colour scheme, fonts and imagery. A successful logo is recognisable, appropriate to the audience, legible at different sizes and suitable for the ways it will be used. The designer chooses vector or bitmap tools according to whether the logo includes photographs, geometric shapes or complex visual effects.",
        "Logo သည် Product၊ အဖွဲ့အစည်း သို့မဟုတ် ဝန်ဆောင်မှုကို ကိုယ်စားပြုသော Visual identity ဖြစ်သည်။ Design brief တွင် Product/Service၊ ရည်ရွယ်ပရိသတ်၊ အမည်၊ အရောင်၊ Font နှင့် ပုံရိပ်တို့ကို သတ်မှတ်ရမည်။ Logo သည် မှတ်မိလွယ်၊ ပရိသတ်နှင့် ကိုက်ညီပြီး အရွယ်အစားမတူသော်လည်း ဖတ်ရှုမြင်သာရမည်။",
        "Write a short logo brief, sketch three ideas, choose one and justify the software and colours.",
        "Logo brief တိုရေးပါ။ Idea သုံးခု Sketch ဆွဲပါ။ တစ်ခုရွေးပြီး Software နှင့် Colour ရွေးချယ်မှုကို အကြောင်းပြပါ။"
      ],
      [
        "Introduction to spreadsheets",
        "A spreadsheet organises data in a grid of rows and columns. A cell is identified by its column letter and row number. A workbook may contain several worksheets. Spreadsheets support data entry, calculations, formatting, tables and charts. Text, numbers, dates and currency values should be entered consistently so that formulas and analysis work correctly. Headings, borders, alignment and number formats make a worksheet easier to understand.",
        "Spreadsheet သည် Data များကို Row နှင့် Column ပါသော Grid အတွင်း စီစဉ်သိမ်းဆည်းသည်။ Cell တစ်ခုကို Column letter နှင့် Row number ဖြင့် ခွဲခြားနိုင်သည်။ Workbook တစ်ခုတွင် Worksheet အများအပြား ပါနိုင်သည်။ Data ထည့်သွင်းခြင်း၊ တွက်ချက်ခြင်း၊ Format ပြုလုပ်ခြင်း၊ Table နှင့် Chart ဖန်တီးခြင်းတို့ကို ပြုလုပ်နိုင်သည်။ Formula မှန်ကန်ရန် Text၊ Number၊ Date နှင့် Currency များကို စနစ်တကျ ထည့်ရမည်။",
        "Create a worksheet with a title row, meaningful column headings, consistent number formats and clear alignment.",
        "Title row၊ အဓိပ္ပာယ်ရှိသော Column heading၊ တူညီသည့် Number format နှင့် ရှင်းလင်းသော Alignment ပါသော Worksheet တစ်ခု ဖန်တီးပါ။"
      ],
      [
        "Spreadsheet formulas and functions",
        "A formula performs a calculation in a spreadsheet and normally begins with an equals sign. Cell references allow a formula to use values stored elsewhere. Operators include addition, subtraction, multiplication and division. Functions are built-in calculations such as SUM, AVERAGE, MIN and MAX. A range identifies a group of cells, often written with a colon between the first and last cell references.",
        "Spreadsheet Formula သည် တွက်ချက်မှုလုပ်ဆောင်ပြီး ပုံမှန်အားဖြင့် = ဖြင့် စတင်သည်။ Cell reference ဖြင့် အခြား Cell တစ်ခုရှိ Value ကို အသုံးပြုနိုင်သည်။ Operator များတွင် ပေါင်း၊ နုတ်၊ မြှောက်၊ စား ပါဝင်သည်။ SUM၊ AVERAGE၊ MIN နှင့် MAX တို့သည် အသင့်ပါ Function များဖြစ်သည်။ Range သည် Cell အစုကို ဖော်ပြပြီး ပထမနှင့် နောက်ဆုံး Cell ကြား Colon သုံးလေ့ရှိသည်။",
        "Enter a formula using cell references, copy it down and compare the result with a manual calculation.",
        "Cell reference အသုံးပြုသော Formula ရိုက်ပါ။ အောက်သို့ Copy လုပ်ပြီး ကိုယ်တိုင်တွက်ထားသည့် ရလဒ်နှင့် နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Spreadsheet modelling",
        "A spreadsheet model represents a real situation using inputs, formulas and outputs. Users can change input values to explore “what-if” scenarios, such as how a budget changes when costs or sales change. A model should identify input cells, calculation cells and output cells, use clear labels and be tested with sensible values. Goal Seek can work backwards from a target result to find an input value that would produce it.",
        "Spreadsheet model သည် Input၊ Formula နှင့် Output များဖြင့် လက်တွေ့အခြေအနေတစ်ခုကို ကိုယ်စားပြုသည်။ Cost သို့မဟုတ် Sales ပြောင်းလဲပါက Budget ဘယ်လိုပြောင်းမလဲ စသည့် “What-if” စမ်းသပ်မှုများ ပြုလုပ်နိုင်သည်။ Input cell၊ Calculation cell နှင့် Output cell များကို သီးခြားသတ်မှတ်ပြီး စမ်းသပ်ရမည်။ Goal Seek သည် လိုချင်သော Result ရရှိစေမည့် Input value ကို နောက်ပြန်ရှာနိုင်သည်။",
        "Create a monthly budget model and change one input at a time to observe its effect on the final balance.",
        "လစဉ် Budget model တစ်ခုဖန်တီးပြီး Input တစ်ခုစီကို သီးခြားပြောင်းကာ နောက်ဆုံး Balance အပေါ် သက်ရောက်မှုကို ကြည့်ပါ။"
      ],
      [
        "Environmental impact of technology",
        "Technology affects the environment through the materials used to manufacture devices, energy consumed during use, transport and disposal. Electronic waste may contain valuable and hazardous materials. Extending device life through repair, upgrading, reuse and responsible recycling can reduce waste. Users and organisations can consider energy efficiency, durability and the availability of recycling schemes when choosing equipment.",
        "Technology သည် Device ထုတ်လုပ်ရာတွင် အသုံးပြုသော ပစ္စည်း၊ အသုံးပြုစဉ် စွမ်းအင်၊ သယ်ယူပို့ဆောင်မှုနှင့် စွန့်ပစ်မှုတို့မှတစ်ဆင့် ပတ်ဝန်းကျင်အပေါ် သက်ရောက်သည်။ Electronic waste တွင် တန်ဖိုးရှိသည့် သို့မဟုတ် အန္တရာယ်ရှိသည့် ပစ္စည်းများ ပါနိုင်သည်။ ပြုပြင်ခြင်း၊ Upgrade လုပ်ခြင်း၊ ပြန်လည်အသုံးပြုခြင်းနှင့် Recycling လုပ်ခြင်းဖြင့် Waste လျှော့နိုင်သည်။",
        "Prepare an environmentally responsible device-use checklist covering energy, repair, reuse and recycling.",
        "စွမ်းအင်ချွေတာမှု၊ ပြုပြင်မှု၊ ပြန်လည်အသုံးပြုမှုနှင့် Recycling ပါဝင်သော ပတ်ဝန်းကျင်ထိန်းသိမ်းရေး Checklist တစ်ခု ပြုလုပ်ပါ။"
      ],
      [
        "Presenting data in an informative way",
        "Data can be presented using tables, charts, diagrams and infographics. The visual form should match the message: a pie chart shows proportions of a whole, a bar or column chart compares categories, and a line chart shows change over time. Titles, axis labels, units, legends and readable colours help an audience interpret a chart. An infographic combines carefully selected facts with visual elements to communicate a message quickly.",
        "Data ကို Table၊ Chart၊ Diagram နှင့် Infographic ဖြင့် တင်ပြနိုင်သည်။ အချက်အလက်အမျိုးအစားနှင့် ကိုက်ညီသော ပုံစံရွေးရမည်။ Pie chart သည် အစိတ်အပိုင်းအချိုး၊ Bar/Column chart သည် Category နှိုင်းယှဉ်မှု၊ Line chart သည် အချိန်နှင့်အမျှ ပြောင်းလဲမှုကို ဖော်ပြသည်။ Title၊ Axis label၊ Unit၊ Legend နှင့် ဖတ်ရလွယ်သော Colour များ ပါဝင်ရမည်။",
        "Choose a chart type for a small dataset, add a title and labels, then write one conclusion supported by the chart.",
        "Data အစုငယ်တစ်ခုအတွက် Chart type ရွေးပါ။ Title နှင့် Label ထည့်ပြီး Chart ကို အခြေခံသော နိဂုံးတစ်ခု ရေးပါ။"
      ],
      [
        "Surveys and questionnaires",
        "A survey collects information from people using questions. Methods may include face-to-face interviews, online forms, websites, text messages or written questionnaires. Good questions are clear, neutral and suitable for the target audience. Avoid leading or double questions. Decide what information is needed, how the sample will be selected, how responses will be stored and whether the data is qualitative or quantitative.",
        "Survey သည် မေးခွန်းများဖြင့် လူများထံမှ အချက်အလက် စုဆောင်းခြင်းဖြစ်သည်။ လူချင်းမေးမြန်းခြင်း၊ Online form၊ Website၊ Text message သို့မဟုတ် စာရွက် Questionnaires အသုံးပြုနိုင်သည်။ မေးခွန်းသည် ရှင်းလင်းပြီး ဘက်မလိုက်ဘဲ ရည်ရွယ်ပရိသတ်နှင့် ကိုက်ညီရမည်။ ဦးတည်ချက်ပါတဲ့ သို့မဟုတ် မေးခွန်းနှစ်ခု ပေါင်းထားသော မေးခွန်းများကို ရှောင်ပါ။",
        "Draft five neutral questions, define the target sample and decide how answers will be recorded.",
        "ဘက်မလိုက်သော မေးခွန်းငါးခု ရေးပါ။ Target sample သတ်မှတ်ပြီး အဖြေများ မှတ်တမ်းတင်မည့်နည်းကို ဆုံးဖြတ်ပါ။"
      ],
      [
        "Advanced spreadsheet functions",
        "Advanced spreadsheet functions automate more complex analysis. COUNT counts cells containing numbers; COUNTIF counts cells that meet a specified condition. Functions should use correctly selected ranges and criteria. A model can combine multiple functions to summarise information, check conditions or count categories. Always test functions with known examples and check that blank or text cells behave as expected.",
        "Advanced spreadsheet function များသည် ပိုမိုရှုပ်ထွေးသော Data analysis ကို အလိုအလျောက်လုပ်ဆောင်ပေးသည်။ COUNT သည် Number ပါသော Cell အရေအတွက်ကို ရေတွက်ပြီး COUNTIF သည် သတ်မှတ်ချက်နှင့် ကိုက်ညီသော Cell များကို ရေတွက်သည်။ Range နှင့် Criteria မှန်ကန်စွာ ရွေးရမည်။ လူသိပြီးသား ဥပမာဖြင့် စမ်းသပ်ပြီး Blank/Text cell များကို ဘယ်လိုကိုင်တွယ်ကြောင်း စစ်ပါ။",
        "Use COUNT for numeric entries and COUNTIF for records meeting a condition, then verify both results manually.",
        "Number ပါသော Cell များအတွက် COUNT၊ သတ်မှတ်ချက်ကိုက်ညီသော Record များအတွက် COUNTIF သုံးပါ။ ရလဒ်နှစ်ခုလုံးကို ကိုယ်တိုင်စစ်ပါ။"
      ]
    ],
    "terms": [
      [
        "Hardware",
        "The physical parts of a computer system.",
        "ကွန်ပျူတာစနစ်၏ ရုပ်ပိုင်းဆိုင်ရာ အစိတ်အပိုင်းများ။"
      ],
      [
        "Software",
        "Programs and instructions that tell hardware what to do.",
        "Hardware ကို ဘာလုပ်ရမည်ဆိုသည်ကို ညွှန်ကြားသော Program များ။"
      ],
      [
        "CPU",
        "The central processing unit that executes instructions.",
        "Instruction များကို လုပ်ဆောင်သော Central processing unit။"
      ],
      [
        "RAM",
        "Temporary working memory used by running programs.",
        "လုပ်ဆောင်နေသော Program များ အသုံးပြုသော ယာယီ Memory။"
      ],
      [
        "Storage",
        "A component or medium that keeps data for later use.",
        "နောက်ပိုင်းအသုံးပြုရန် Data သိမ်းထားသော Component/Medium။"
      ],
      [
        "Motherboard",
        "The main circuit board that connects computer components.",
        "Computer component များကို ချိတ်ဆက်ပေးသော Main circuit board။"
      ],
      [
        "Power supply unit (PSU)",
        "A component that provides electrical power to the computer.",
        "ကွန်ပျူတာအတွက် လျှပ်စစ်စွမ်းအင် ပေးသော Unit။"
      ],
      [
        "Video card",
        "Hardware that processes graphics for display.",
        "Screen ပေါ်ရှိ Graphic များ Process လုပ်ပေးသော Hardware။"
      ],
      [
        "Sound card",
        "Hardware for handling audio input and output.",
        "Audio input/output ကို ကိုင်တွယ်သော Hardware။"
      ],
      [
        "Input device",
        "Hardware used to enter data or commands.",
        "Data/Command ထည့်သွင်းရန် အသုံးပြုသော Hardware။"
      ],
      [
        "Output device",
        "Hardware that presents processed information.",
        "Process လုပ်ပြီးသော Information ကို ပြသသော Hardware။"
      ],
      [
        "Wearable technology",
        "Electronic technology designed to be worn on the body.",
        "ကိုယ်ခန္ဓာပေါ်တွင် ဝတ်ဆင်ရန် ဒီဇိုင်းပြုလုပ်ထားသော Electronic နည်းပညာ။"
      ],
      [
        "Smartwatch",
        "A wrist-worn device with computing or communication functions.",
        "Computer/Communication function ပါသော လက်ပတ်နာရီ။"
      ],
      [
        "Fitness tracker",
        "A wearable device that records activity or health-related measurements.",
        "လှုပ်ရှားမှု/ကျန်းမာရေးဆိုင်ရာ တိုင်းတာချက်များ မှတ်တမ်းတင်သော Wearable။"
      ],
      [
        "Sensor",
        "A component that detects a physical condition or change.",
        "ရုပ်ပိုင်းဆိုင်ရာ အခြေအနေ/ပြောင်းလဲမှုကို သိရှိသော Component။"
      ],
      [
        "Augmented reality (AR)",
        "Digital information added to a view of the real world.",
        "လက်တွေ့ကမ္ဘာမြင်ကွင်းပေါ် Digital information ထပ်ဖြည့်ခြင်း။"
      ],
      [
        "Virtual reality (VR)",
        "A computer-generated environment experienced immersively.",
        "Computer ဖြင့်ဖန်တီးထားသော Virtual ပတ်ဝန်းကျင်ကို အပြည့်အဝ ခံစားအသုံးပြုခြင်း။"
      ],
      [
        "Data privacy",
        "Control over the collection and use of personal data.",
        "ကိုယ်ရေးကိုယ်တာ Data စုဆောင်း/အသုံးပြုမှုအပေါ် ထိန်းချုပ်ခွင့်။"
      ],
      [
        "Logo",
        "A visual symbol representing a brand or service.",
        "Brand သို့မဟုတ် Service ကို ကိုယ်စားပြုသော ပုံသင်္ကေတ။"
      ],
      [
        "Brand identity",
        "The visual and verbal features that identify an organisation.",
        "အဖွဲ့အစည်းကို ခွဲခြားသိနိုင်စေသော Visual/Verbal အမှတ်အသားများ။"
      ],
      [
        "Spreadsheet",
        "Software that organises data in rows, columns and cells.",
        "Data ကို Row၊ Column နှင့် Cell များဖြင့် စီစဉ်သော Software။"
      ],
      [
        "Workbook",
        "A spreadsheet file that can contain multiple worksheets.",
        "Worksheet အများအပြား ပါဝင်နိုင်သော Spreadsheet ဖိုင်။"
      ],
      [
        "Worksheet",
        "A single spreadsheet grid within a workbook.",
        "Workbook အတွင်းရှိ Spreadsheet ဇယားတစ်ခု။"
      ],
      [
        "Cell",
        "The intersection of a row and a column.",
        "Row နှင့် Column ဆုံရာ Cell။"
      ],
      [
        "Cell reference",
        "The address used to identify a cell, such as B4.",
        "B4 ကဲ့သို့ Cell ကို ခွဲခြားသတ်မှတ်သော လိပ်စာ။"
      ],
      [
        "Formula",
        "An expression entered into a spreadsheet to calculate a result.",
        "Spreadsheet တွင် ရလဒ်တွက်ရန် ထည့်သွင်းသော Expression။"
      ],
      [
        "Function",
        "A built-in formula that performs a named calculation.",
        "အမည်ပေးထားသော တွက်ချက်မှုလုပ်ဆောင်သည့် Built-in formula။"
      ],
      [
        "SUM",
        "A function that adds values in a range.",
        "Range အတွင်း Value များကို ပေါင်းပေးသော Function။"
      ],
      [
        "AVERAGE",
        "A function that calculates the arithmetic mean.",
        "ပျမ်းမျှတန်ဖိုး တွက်ပေးသော Function။"
      ],
      [
        "COUNTIF",
        "A function that counts cells meeting a condition.",
        "သတ်မှတ်ချက်နှင့် ကိုက်ညီသော Cell များကို ရေတွက်သော Function။"
      ],
      [
        "Spreadsheet model",
        "A spreadsheet representing a real situation through inputs and calculations.",
        "Input နှင့် Calculation များဖြင့် လက်တွေ့အခြေအနေကို ကိုယ်စားပြုသော Spreadsheet။"
      ],
      [
        "Goal Seek",
        "A tool that finds an input needed to reach a target result.",
        "သတ်မှတ်ထားသော Target ရလဒ်ရရန် လိုအပ်သော Input ကို ရှာပေးသော Tool။"
      ]
    ],
    "examples": [
      "A computer may have a CPU, RAM, motherboard, storage drive and PSU; each component has a different role.",
      "A budget spreadsheet can calculate total costs with SUM and average monthly spending with AVERAGE.",
      "A pie chart can show the share of a survey total for each response category."
    ],
    "examplesMy": [
      "ကွန်ပျူတာတစ်လုံးတွင် CPU၊ RAM၊ Motherboard၊ Storage drive နှင့် PSU ပါဝင်နိုင်ပြီး တစ်ခုစီ၏ လုပ်ဆောင်ချက် မတူပါ။",
      "Budget Spreadsheet တွင် SUM ဖြင့် စုစုပေါင်းကုန်ကျစရိတ်၊ AVERAGE ဖြင့် လစဉ်ပျမ်းမျှသုံးစွဲမှု တွက်နိုင်သည်။",
      "Survey အဖြေ Category တစ်ခုစီ၏ စုစုပေါင်းအပေါ် ပါဝင်မှုကို Pie chart ဖြင့် ပြနိုင်သည်။"
    ],
    "table": {
      "caption": "Spreadsheet building blocks and functions",
      "headers": [
        "Item",
        "Purpose",
        "Example"
      ],
      "rows": [
        [
          "Cell",
          "Stores one value",
          "B4"
        ],
        [
          "Formula",
          "Calculates using values or references",
          "=B2*C2"
        ],
        [
          "SUM",
          "Adds a range",
          "=SUM(B2:B8)"
        ],
        [
          "AVERAGE",
          "Calculates mean",
          "=AVERAGE(C2:C8)"
        ],
        [
          "COUNT",
          "Counts numeric cells",
          "=COUNT(A2:A20)"
        ],
        [
          "COUNTIF",
          "Counts cells matching a condition",
          "=COUNTIF(D2:D20,\"Pass\")"
        ],
        [
          "Goal Seek",
          "Finds an input for a target output",
          "Target balance = 0"
        ]
      ]
    },
    "activities": [
      [
        "Hardware identification",
        "Create a labelled diagram of a desktop system and identify the role of CPU, RAM, storage, motherboard and PSU.",
        "Desktop system ပုံတစ်ပုံ Label တပ်ပြီး CPU၊ RAM၊ Storage၊ Motherboard နှင့် PSU တို့၏ လုပ်ဆောင်ချက် ဖော်ပြပါ။"
      ],
      [
        "Spreadsheet formula practice",
        "Enter a small sales table and calculate totals, averages, minimum and maximum values.",
        "Sales table အသေးတစ်ခု ထည့်ပြီး Total၊ Average၊ Minimum နှင့် Maximum တွက်ပါ။"
      ],
      [
        "What-if model",
        "Create a simple monthly budget and use changed inputs to model a saving target.",
        "လစဉ် Budget တစ်ခု ဖန်တီးပြီး Saving target အတွက် Input ပြောင်းလဲ၍ Model လုပ်ပါ။"
      ],
      [
        "Survey and infographic",
        "Collect at least ten responses to a neutral question and present the result in one chart or infographic.",
        "ဘက်မလိုက်သော မေးခွန်းတစ်ခုဖြင့် အဖြေ ၁၀ ခုအနည်းဆုံး စုဆောင်းပြီး Chart/Infographic ဖြင့် တင်ပြပါ။"
      ]
    ],
    "slides": [
      "Computer hardware and component roles",
      "Wearable devices, sensors and data privacy",
      "Planning a logo for a target audience",
      "Spreadsheet grids, cells and formatting",
      "Formulas, references and common functions",
      "What-if modelling and Goal Seek",
      "Environmental effects and responsible reuse",
      "Choosing charts and informative visuals",
      "Survey design and collecting data",
      "COUNT, COUNTIF and advanced analysis"
    ],
    "essays": [
      [
        "Explain the role of the CPU, RAM and storage in a computer.",
        "The CPU executes instructions and processes data. RAM temporarily holds programs and data currently in use. Storage keeps files and programs for longer term and retains them when the power is off.",
        [
          "CPU",
          "executes instructions",
          "RAM",
          "temporary",
          "storage",
          "power is off"
        ]
      ],
      [
        "Describe how a spreadsheet can be used to model a monthly budget.",
        "Enter income and expense values in labelled cells, use formulas such as SUM to total expenses and calculate the balance, then change inputs to test what-if scenarios. Goal Seek can find an input needed to achieve a target balance.",
        [
          "income",
          "expenses",
          "SUM",
          "balance",
          "what-if",
          "Goal Seek"
        ]
      ],
      [
        "Compare SUM, AVERAGE and COUNTIF.",
        "SUM adds numeric values in a range. AVERAGE calculates the arithmetic mean. COUNTIF counts cells that meet a specified condition. Each function uses an appropriate range and, for COUNTIF, a criterion.",
        [
          "adds",
          "mean",
          "counts",
          "condition",
          "range",
          "criterion"
        ]
      ],
      [
        "Explain two ways to reduce the environmental impact of computer technology.",
        "Repair or upgrade devices to extend their useful life, reuse equipment where safe, recycle electronic waste through appropriate schemes and choose energy-efficient devices. These actions reduce demand for new materials, energy use and waste.",
        [
          "repair",
          "upgrade",
          "reuse",
          "recycle",
          "energy-efficient",
          "waste"
        ]
      ]
    ]
  },
  {
    "id": 4,
    "title": "Analysing Data",
    "myTitle": "Data ကို ခွဲခြမ်းစိတ်ဖြာခြင်း",
    "range": "Student Book pp. 74–92",
    "accent": "blue",
    "overview": "This unit examines social media, spreadsheet quality, the difference between data, information and knowledge, sorting and filtering, online advertisement design, chart selection and infographic design.",
    "overviewMy": "ဤယူနစ်တွင် Social media၊ ကောင်းမွန်သော Spreadsheet၊ Data/Information/Knowledge ကွာခြားချက်၊ Sorting နှင့် Filtering၊ Online advertisement ဒီဇိုင်း၊ Chart ရွေးချယ်မှုနှင့် Infographic ဖန်တီးမှုတို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Describe common forms of social media and consider benefits, risks and cyberbullying.",
        "Social media ပုံစံများ၊ အကျိုးကျေးဇူး၊ အန္တရာယ်နှင့် Cyberbullying ကို ဖော်ပြရန်။"
      ],
      [
        "Explain what makes a spreadsheet clear, accurate and useful.",
        "Spreadsheet တစ်ခုကို ရှင်းလင်း၊ တိကျ၊ အသုံးဝင်စေသော အချက်များကို ရှင်းပြရန်။"
      ],
      [
        "Distinguish data, information and knowledge and use sorting and filtering.",
        "Data၊ Information၊ Knowledge ကို ခွဲခြားပြီး Sorting/Filtering အသုံးပြုရန်။"
      ],
      [
        "Design effective online advertisements, charts and infographics for an audience.",
        "ပရိသတ်နှင့် ကိုက်ညီသော Online advertisement၊ Chart နှင့် Infographic ဖန်တီးရန်။"
      ]
    ],
    "lessons": [
      [
        "Social media",
        "Social media platforms allow people to communicate, share content, create profiles, follow others and participate in communities. Forms include instant messaging, blogging, media sharing, social networking and online gaming. Blogs often display posts with dates and times. Social media can support learning and communication but may also bring cyberbullying, misinformation, privacy issues, unwanted contact and targeted advertising.",
        "Social media platform များသည် လူများကို ဆက်သွယ်ခြင်း၊ အကြောင်းအရာမျှဝေခြင်း၊ Profile ဖန်တီးခြင်း၊ အခြားသူများကို Follow လုပ်ခြင်းနှင့် Community တွင် ပါဝင်ခြင်းတို့ ပြုလုပ်စေသည်။ Instant messaging၊ Blogging၊ Media sharing၊ Social networking နှင့် Online gaming တို့ ပါဝင်သည်။ အကျိုးရှိသော်လည်း Cyberbullying၊ သတင်းမှား၊ Privacy ပြဿနာနှင့် မလိုသောကြော်ငြာများ ဖြစ်နိုင်သည်။",
        "Review privacy settings, think before sharing, report abusive behaviour and check whether a post is reliable before forwarding it.",
        "Privacy setting များ စစ်ပါ။ မျှဝေမီ စဉ်းစားပါ။ ထိခိုက်စေသော အပြုအမူကို Report လုပ်ပြီး Post တစ်ခုကို Forward မလုပ်မီ ယုံကြည်ရမှု စစ်ဆေးပါ။"
      ],
      [
        "What makes a good spreadsheet",
        "A good spreadsheet is accurate, clear and consistent. It uses meaningful headings, suitable number formats, consistent alignment, readable column widths and an organised layout. Data should be separated from calculations where possible. Important cells may be formatted to guide the user, but excessive colours and decoration can make a worksheet harder to use. Check formulas and protect important cells when appropriate.",
        "ကောင်းမွန်သော Spreadsheet သည် တိကျ၊ ရှင်းလင်းပြီး တစ်သမတ်တည်းရှိရမည်။ အဓိပ္ပာယ်ရှိသော Heading၊ သင့်တော်သော Number format၊ Alignment၊ ဖတ်ရလွယ်သော Column width နှင့် စနစ်တကျ Layout ပါဝင်ရမည်။ Data နှင့် Calculation ကို ဖြစ်နိုင်ပါက ခွဲထားပါ။ အရောင်/အလှဆင်မှု အလွန်အကျွံ မသုံးသင့်ပါ။",
        "Review a worksheet for headings, formats, formula accuracy and readability; suggest three improvements.",
        "Worksheet ကို Heading၊ Format၊ Formula တိကျမှုနှင့် ဖတ်ရလွယ်မှုအတွက် စစ်ဆေးပြီး ပြင်ဆင်ချက် သုံးခု အကြံပြုပါ။"
      ],
      [
        "Knowledge, data and information",
        "Data are raw facts or values. Information is data processed or organised so that it has meaning in a context. Knowledge is understanding gained by interpreting information and applying experience. Primary data is collected first-hand for a purpose; secondary data already exists and was collected by someone else. The source and method of collection affect how useful and reliable data may be.",
        "Data သည် မူလအချက်အလက် သို့မဟုတ် တန်ဖိုးများဖြစ်သည်။ Information သည် အဓိပ္ပာယ်ရှိစေရန် စီစဉ်/Process လုပ်ထားသော Data ဖြစ်သည်။ Knowledge သည် Information ကို နားလည်သုံးသပ်ပြီး အတွေ့အကြုံနှင့် အသုံးချခြင်းမှ ရရှိသော အသိပညာဖြစ်သည်။ Primary data ကို မိမိရည်ရွယ်ချက်အတွက် ကိုယ်တိုင်စုဆောင်းပြီး Secondary data သည် ယခင်က အခြားသူ စုဆောင်းထားသော Data ဖြစ်သည်။",
        "Take a set of raw survey responses, organise them into totals and explain what conclusion can be drawn.",
        "Survey အဖြေများကို စုစုပေါင်းအဖြစ် စီစဉ်ပြီး မည်သည့်နိဂုံးချုပ်နိုင်ကြောင်း ရှင်းပြပါ။"
      ],
      [
        "Sorting and filtering a spreadsheet",
        "Sorting rearranges records into an order, for example alphabetical, numerical, ascending or descending. Filtering temporarily displays only records that meet selected criteria. Headings should be kept separate from the data range so they are not sorted as records. After sorting or filtering, check that each row still represents one complete record and that all relevant columns were included.",
        "Sorting သည် Record များကို Alphabetical၊ Numeric၊ Ascending သို့မဟုတ် Descending အစီအစဉ်အတိုင်း ပြန်စီသည်။ Filtering သည် သတ်မှတ်ထားသော Criteria နှင့် ကိုက်ညီသော Record များကိုသာ ယာယီပြသသည်။ Heading များကို Data range နှင့် ခွဲထားရမည်။ Sort/Filter လုပ်ပြီးနောက် Row တစ်ခုစီ၏ Record မပျက်ကြောင်း စစ်ဆေးပါ။",
        "Select the complete dataset, identify the sort column or filter criteria, apply the operation and verify the records.",
        "Data အစုတစ်ခုလုံးကို ရွေးပါ။ Sort column သို့မဟုတ် Filter criteria သတ်မှတ်ပါ။ လုပ်ဆောင်ပြီး Record များ မှန်ကန်ကြောင်း စစ်ဆေးပါ။"
      ],
      [
        "Design techniques for an online advertisement",
        "An online advertisement should communicate its message quickly to a defined target audience. It may use a product name, relevant image, concise text, price or special offer and a clear call to action. The design should fit the placement and screen size. Use visual hierarchy, readable type, a limited colour palette and truthful information. Consider where the advert will appear, such as a website, app or social platform.",
        "Online advertisement သည် သတ်မှတ်ထားသော Target audience ထံ Message ကို မြန်မြန်နားလည်စေရမည်။ Product name၊ သက်ဆိုင်သောပုံ၊ စာသားတို၊ ဈေးနှုန်း/Special offer နှင့် Action ခေါ်ယူချက် ပါဝင်နိုင်သည်။ ပြသမည့် Screen size နှင့် နေရာနှင့် ကိုက်ညီစေရမည်။ Visual hierarchy၊ ဖတ်ရလွယ်သော Font နှင့် Colour အနည်းငယ် သုံးပြီး မှန်ကန်သော အချက်အလက်သာ ဖော်ပြရမည်။",
        "Define the audience and objective, sketch a layout, select a focal image and check legibility at the intended size.",
        "ပရိသတ်နှင့် ရည်ရွယ်ချက် သတ်မှတ်ပါ။ Layout sketch ဆွဲပါ။ အဓိကပုံရွေးပြီး ရည်ရွယ်ထားသော အရွယ်အစားတွင် ဖတ်ရလွယ်မှု စစ်ပါ။"
      ],
      [
        "What makes a good chart",
        "A chart should make a pattern or comparison easier to understand. A bar or column chart compares categories, a line chart shows change over time, a pie chart shows proportions of a whole and a scatter graph can show a relationship between two numerical variables. Use a clear title, labelled axes, suitable scales, units and a legend where needed. Avoid misleading scales and unnecessary decoration.",
        "Chart သည် Pattern သို့မဟုတ် နှိုင်းယှဉ်မှုကို နားလည်လွယ်စေရမည်။ Bar/Column chart သည် Category နှိုင်းယှဉ်ပြီး Line chart သည် အချိန်နှင့်အမျှ ပြောင်းလဲမှုကို ပြသည်။ Pie chart သည် အစိတ်အပိုင်းအချိုးကို ပြပြီး Scatter graph သည် Number variable နှစ်ခု၏ ဆက်နွယ်မှုကို ပြနိုင်သည်။ Title၊ Axis label၊ Scale၊ Unit နှင့် လိုအပ်သော Legend ထည့်ရမည်။",
        "Match the chart to the question being asked, add labels and check that the scale does not distort the message.",
        "မေးခွန်းနှင့် ကိုက်ညီသော Chart ရွေးပါ။ Label များထည့်ပြီး Scale ကြောင့် Message မလွဲမှားစေရန် စစ်ဆေးပါ။"
      ],
      [
        "Designing an infographic",
        "An infographic presents selected information through a combination of text, charts, icons, illustrations and layout. It should have one clear purpose and a logical reading order. Visual hierarchy guides attention from the headline to key facts and supporting detail. Use accurate figures, concise captions, readable typography, consistent colours and appropriate source attribution. A crowded infographic can hide the message, so remove details that do not support the main point.",
        "Infographic သည် Text၊ Chart၊ Icon၊ Illustration နှင့် Layout တို့ကို ပေါင်းစပ်၍ အချက်အလက်များ တင်ပြသော ပုံစံဖြစ်သည်။ ရည်ရွယ်ချက်တစ်ခု ရှင်းလင်းပြီး ဖတ်ရှုအစီအစဉ်မှာ သဘာဝကျရမည်။ Visual hierarchy ဖြင့် Headline မှ အချက်အလက်အဓိကများသို့ အာရုံစိုက်စေသည်။ ကိန်းဂဏန်းမှန်ကန်မှု၊ Caption တိုတောင်းမှု၊ ဖတ်ရလွယ်သော Font နှင့် Source credit ပါဝင်ရမည်။ မလိုသော အသေးစိတ်များ ဖယ်ရှားပါ။",
        "Choose one key message, select only relevant statistics, arrange a reading path and cite the data source.",
        "အဓိက Message တစ်ခုရွေးပါ။ သက်ဆိုင်သော Statistic များကိုသာ ရွေးပြီး ဖတ်ရှုအစီအစဉ် စီစဉ်ကာ Data source ကို ဖော်ပြပါ။"
      ]
    ],
    "terms": [
      [
        "Social media",
        "Online platforms used to create, share and interact with content or communities.",
        "Content နှင့် Community များကို ဖန်တီး/မျှဝေ/ဆက်သွယ်ရန် Online platform များ။"
      ],
      [
        "Platform",
        "An online service or environment where users interact.",
        "အသုံးပြုသူများ အပြန်အလှန် ဆက်သွယ်နိုင်သော Online ဝန်ဆောင်မှု။"
      ],
      [
        "Profile",
        "A user's personal page containing selected information.",
        "အသုံးပြုသူတစ်ဦး၏ ကိုယ်ရေးအချက်အလက်အချို့ပါသော စာမျက်နှာ။"
      ],
      [
        "Follower",
        "A user who subscribes to another user's updates.",
        "အခြားအသုံးပြုသူ၏ Update များကို Follow လုပ်သူ။"
      ],
      [
        "Friend request",
        "A request to connect with another account.",
        "အခြား Account နှင့် ချိတ်ဆက်ရန် တောင်းဆိုမှု။"
      ],
      [
        "Instant messaging",
        "Real-time exchange of short messages.",
        "အချိန်နှင့်တပြေးညီ Message တိုများ အပြန်အလှန်ပို့ခြင်း။"
      ],
      [
        "Blog",
        "A website or page with regularly published posts.",
        "ပုံမှန် Post များ တင်သော Website/Page။"
      ],
      [
        "Timestamp",
        "A date and/or time attached to an item of content.",
        "Content တစ်ခုနှင့် တွဲထားသော ရက်စွဲ/အချိန်။"
      ],
      [
        "Media sharing",
        "Publishing or exchanging images, video or audio online.",
        "ပုံ၊ ဗီဒီယို၊ အသံများကို Online မျှဝေခြင်း။"
      ],
      [
        "Social networking",
        "Building and maintaining online connections between people.",
        "လူများအကြား Online ချိတ်ဆက်မှု တည်ဆောက်ထိန်းသိမ်းခြင်း။"
      ],
      [
        "Cyberbullying",
        "Using digital communication to bully or harm someone.",
        "Digital communication ဖြင့် တစ်စုံတစ်ဦးကို အနိုင်ကျင့်/ထိခိုက်စေခြင်း။"
      ],
      [
        "Targeted advertising",
        "Ads selected for users based on data or interests.",
        "Data/စိတ်ဝင်စားမှုအပေါ် မူတည်၍ ရွေးချယ်ပြသသော ကြော်ငြာ။"
      ],
      [
        "Data",
        "Raw facts, values or observations.",
        "မူလအချက်အလက်၊ တန်ဖိုး သို့မဟုတ် လေ့လာတွေ့ရှိချက်။"
      ],
      [
        "Information",
        "Data organised or processed to have meaning.",
        "အဓိပ္ပာယ်ရှိစေရန် စီစဉ်/Process လုပ်ထားသော Data။"
      ],
      [
        "Knowledge",
        "Understanding gained by interpreting and applying information.",
        "Information ကို နားလည်သုံးသပ်အသုံးချခြင်းမှ ရရှိသော အသိပညာ။"
      ],
      [
        "Primary data",
        "Data collected first-hand for a particular purpose.",
        "သတ်မှတ်ရည်ရွယ်ချက်အတွက် ကိုယ်တိုင်စုဆောင်းသော Data။"
      ],
      [
        "Secondary data",
        "Data previously collected by another person or organisation.",
        "အခြားသူ/အဖွဲ့အစည်းက ယခင်က စုဆောင်းထားသော Data။"
      ],
      [
        "Spreadsheet quality",
        "The accuracy, clarity and usability of a spreadsheet.",
        "Spreadsheet ၏ တိကျမှု၊ ရှင်းလင်းမှုနှင့် အသုံးဝင်မှု။"
      ],
      [
        "Sorting",
        "Rearranging records into a chosen order.",
        "Record များကို ရွေးချယ်ထားသော အစီအစဉ်အတိုင်း ပြန်စီခြင်း။"
      ],
      [
        "Ascending order",
        "An order from lower to higher or A to Z.",
        "အနိမ့်မှ အမြင့်သို့ သို့မဟုတ် A မှ Z သို့ စီခြင်း။"
      ],
      [
        "Descending order",
        "An order from higher to lower or Z to A.",
        "အမြင့်မှ အနိမ့်သို့ သို့မဟုတ် Z မှ A သို့ စီခြင်း။"
      ],
      [
        "Filtering",
        "Displaying only records that meet chosen criteria.",
        "သတ်မှတ်ချက်နှင့် ကိုက်ညီသော Record များကိုသာ ပြသခြင်း။"
      ],
      [
        "Criteria",
        "A rule or condition used to select records.",
        "Record ရွေးချယ်ရန် အသုံးပြုသော စည်းမျဉ်း/သတ်မှတ်ချက်။"
      ],
      [
        "Online advertisement",
        "A promotional message displayed through digital media.",
        "Digital media မှတစ်ဆင့် ပြသသော ကြော်ငြာ။"
      ],
      [
        "Call to action",
        "A prompt telling the audience what action to take.",
        "ပရိသတ်ကို မည်သည့်လုပ်ဆောင်ချက်လုပ်ရန် ညွှန်ပြသော စာသား။"
      ],
      [
        "Visual hierarchy",
        "Arrangement that guides the viewer's attention by importance.",
        "အရေးကြီးမှုအလိုက် ကြည့်ရှုသူ၏ အာရုံကို လမ်းညွှန်သော စီစဉ်ပုံ။"
      ],
      [
        "Bar chart",
        "A chart comparing categories with rectangular bars.",
        "ထောင့်မှန်စတုဂံတန်းများဖြင့် Category နှိုင်းယှဉ်သော Chart။"
      ],
      [
        "Line chart",
        "A chart showing change or trend over an ordered scale, often time.",
        "အချိန်ကဲ့သို့ အစီအစဉ်ရှိ Scale အပေါ် Trend ပြသော Chart။"
      ],
      [
        "Pie chart",
        "A circular chart showing parts of a whole.",
        "စုစုပေါင်းတစ်ခု၏ အစိတ်အပိုင်းများကို စက်ဝိုင်းဖြင့် ပြသော Chart။"
      ],
      [
        "Scatter graph",
        "A graph showing paired numerical values and possible relationships.",
        "Number တန်ဖိုးအတွဲများနှင့် ဆက်နွယ်မှုကို ပြသော Graph။"
      ],
      [
        "Infographic",
        "A visual presentation combining data and explanatory graphics.",
        "Data နှင့် ရှင်းလင်းသည့် Graphic များ ပေါင်းစပ်ထားသော တင်ပြပုံ။"
      ],
      [
        "Legend",
        "A key explaining the meaning of chart symbols or colours.",
        "Chart သင်္ကေတ/အရောင်များ၏ အဓိပ္ပာယ်ကို ရှင်းပြသော Key။"
      ],
      [
        "Axis label",
        "Text identifying what a chart axis represents.",
        "Chart Axis က ဘာကို ကိုယ်စားပြုကြောင်း ဖော်ပြသော စာသား။"
      ]
    ],
    "examples": [
      "A school survey records raw answers as data, groups them into totals as information and uses the pattern to decide what clubs learners may need.",
      "A spreadsheet can filter a class list to show only students whose assessment result is “Pass”.",
      "A line chart is suitable for showing how a website’s visitor count changes each month."
    ],
    "examplesMy": [
      "ကျောင်း Survey အဖြေမူလများသည် Data ဖြစ်ပြီး စုစုပေါင်းအဖြစ် စီစဉ်လျှင် Information ဖြစ်ကာ Pattern ကို အသုံးပြု၍ လိုအပ်သော Club ကို ဆုံးဖြတ်နိုင်သည်။",
      "Spreadsheet တစ်ခုတွင် Assessment ရလဒ် “Pass” ဖြစ်သော ကျောင်းသားများကိုသာ Filter လုပ်ပြနိုင်သည်။",
      "Website visitor အရေအတွက် လစဉ်ပြောင်းလဲပုံကို Line chart ဖြင့် ဖော်ပြနိုင်သည်။"
    ],
    "table": {
      "caption": "Choosing a visual for a data question",
      "headers": [
        "Visual",
        "Best suited to",
        "Important checks"
      ],
      "rows": [
        [
          "Table",
          "Exact values and detailed records",
          "Headings, units, consistent formats"
        ],
        [
          "Bar / column chart",
          "Comparing categories",
          "Axis labels, scale, readable bars"
        ],
        [
          "Line chart",
          "Change over time",
          "Ordered time axis, sensible intervals"
        ],
        [
          "Pie chart",
          "Proportions of a whole",
          "Parts should total 100%"
        ],
        [
          "Scatter graph",
          "Relationship between numeric variables",
          "Label variables and inspect pattern"
        ],
        [
          "Infographic",
          "A key message supported by visual facts",
          "Source, hierarchy, concise text"
        ]
      ]
    },
    "activities": [
      [
        "Social media safety review",
        "Review a sample profile and list which details should be public, private or never shared.",
        "နမူနာ Profile တစ်ခုကို စစ်ဆေးပြီး Public၊ Private သို့မဟုတ် မမျှဝေသင့်သော အချက်များကို စာရင်းပြုစုပါ။"
      ],
      [
        "Spreadsheet quality audit",
        "Inspect a worksheet for inconsistent formats, unclear headings and formula errors.",
        "Worksheet တစ်ခုတွင် Format မညီမှု၊ Heading မရှင်းမှုနှင့် Formula error များကို စစ်ဆေးပါ။"
      ],
      [
        "Sort and filter exercise",
        "Create a small dataset and sort by score, then filter records that meet a selected condition.",
        "Data set အသေးတစ်ခုဖန်တီးပြီး Score အလိုက် Sort လုပ်ကာ သတ်မှတ်ချက်နှင့် ကိုက်ညီသည့် Record များကို Filter လုပ်ပါ။"
      ],
      [
        "Advertisement / infographic",
        "Design a small online advert and a one-page infographic for a defined audience; include a source note for any statistics.",
        "သတ်မှတ်ပရိသတ်အတွက် Online advert အသေးနှင့် တစ်မျက်နှာ Infographic ဖန်တီးပါ။ Statistic သုံးပါက Source ဖော်ပြပါ။"
      ]
    ],
    "slides": [
      "Social media forms, profiles and risks",
      "Making spreadsheets clear and reliable",
      "From data to information and knowledge",
      "Sorting records and filtering by criteria",
      "Online advertisement planning and visual hierarchy",
      "Choosing a chart for the data",
      "Infographic structure, layout and attribution"
    ],
    "essays": [
      [
        "Explain the difference between data, information and knowledge using a survey example.",
        "Data are the raw survey responses. Information is created by organising responses into totals or patterns. Knowledge is the understanding gained from interpreting the pattern and using it to make a decision.",
        [
          "raw responses",
          "organising",
          "totals",
          "patterns",
          "interpreting",
          "decision"
        ]
      ],
      [
        "Compare sorting and filtering in a spreadsheet.",
        "Sorting changes the order of records, for example ascending or descending. Filtering displays only records that meet selected criteria while hiding the others temporarily.",
        [
          "order",
          "ascending",
          "descending",
          "criteria",
          "displays only"
        ]
      ],
      [
        "Choose suitable charts for category comparison, proportions and change over time.",
        "A bar or column chart compares categories. A pie chart shows proportions of a whole. A line chart is suitable for showing change over time. Titles, labels, units and sensible scales should be included.",
        [
          "bar chart",
          "categories",
          "pie chart",
          "proportions",
          "line chart",
          "time"
        ]
      ],
      [
        "Describe ways to make an online advertisement effective and responsible.",
        "Define the target audience and purpose, use a clear product name and relevant image, keep text concise, make the call to action visible, fit the design to the display size and ensure claims are accurate.",
        [
          "target audience",
          "purpose",
          "relevant image",
          "concise",
          "call to action",
          "accurate"
        ]
      ]
    ]
  },
  {
    "id": 5,
    "title": "Programming",
    "myTitle": "Programming / ပရိုဂရမ်ရေးသားခြင်း",
    "range": "Student Book pp. 94–114",
    "accent": "rose",
    "overview": "This unit develops algorithms and turtle programming, sequence and iteration, debugging syntax and logic errors, Python lists, selection, simple chatbots, subprograms and a missing-word game project.",
    "overviewMy": "ဤယူနစ်တွင် Algorithm နှင့် Turtle programming၊ Sequence နှင့် Iteration၊ Syntax/Logic error များကို Debug လုပ်ခြင်း၊ Python List၊ Selection၊ ရိုးရှင်းသော Chatbot၊ Subprogram နှင့် Missing-word game project တို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain an algorithm and create simple graphics through turtle commands.",
        "Algorithm ကို ရှင်းပြပြီး Turtle command များဖြင့် ရိုးရှင်းသော ပုံများ ဖန်တီးရန်။"
      ],
      [
        "Use sequence and iteration to design and trace algorithms.",
        "Algorithm များတွင် Sequence နှင့် Iteration အသုံးပြု၍ ဒီဇိုင်းဆွဲ၊ Trace လုပ်ရန်။"
      ],
      [
        "Identify syntax and logic errors and use lists and selection in Python.",
        "Syntax/Logic error များကို ခွဲခြားပြီး Python တွင် List နှင့် Selection အသုံးပြုရန်။"
      ],
      [
        "Use chatbots and subprograms as part of a small interactive program.",
        "Chatbot နှင့် Subprogram များကို အသုံးပြု၍ Interactive program အသေးတစ်ခု တည်ဆောက်ရန်။"
      ]
    ],
    "lessons": [
      [
        "Algorithms and turtle programming",
        "An algorithm is a clear sequence of steps for solving a problem. It needs a starting point, detailed instructions and an endpoint. Turtle graphics use commands to move a cursor and draw shapes. The Student Book introduces commands such as `forward`, `backward`, `left`, `right`, `penup`, `pendown`, `pensize` and `pencolor`. Angles and distances determine the shape; repeating a movement and turn can create regular polygons.",
        "Algorithm သည် ပြဿနာဖြေရှင်းရန် ရှင်းလင်းသော အဆင့်အစီအစဉ်ဖြစ်ပြီး Start point၊ အသေးစိတ် Instruction နှင့် End point လိုအပ်သည်။ Turtle graphic သည် Cursor ကို ရွှေ့ပြီး ပုံဆွဲသော Command များကို သုံးသည်။ `forward`၊ `backward`၊ `left`၊ `right`၊ `penup`၊ `pendown`၊ `pensize` နှင့် `pencolor` တို့ ပါဝင်သည်။ Angle နှင့် Distance များက ပုံသဏ္ဌာန်ကို သတ်မှတ်သည်။",
        "Set the turtle's starting position, choose the pen colour and size, move a distance, turn by an angle and repeat as needed.",
        "Turtle ၏ စတင်နေရာ သတ်မှတ်ပါ။ Pen colour/size ရွေးပါ။ အကွာအဝေးတစ်ခု ရွှေ့ပြီး Angle ဖြင့်လှည့်ကာ လိုအပ်သလို ထပ်လုပ်ပါ။"
      ],
      [
        "Sequencing and iteration algorithms",
        "Sequence is the order in which instructions are executed. Iteration repeats one or more instructions, usually while a condition is true or for a set number of times. A loop reduces repeated code and helps draw patterns or process multiple items. A trace table or step-by-step trace can show how values and the program state change during each repetition.",
        "Sequence သည် Instruction များ လုပ်ဆောင်သည့် အစီအစဉ်ဖြစ်သည်။ Iteration သည် Condition မှန်နေသရွေ့ သို့မဟုတ် သတ်မှတ်အကြိမ်ရေအလိုက် Instruction များ ထပ်လုပ်ခြင်းဖြစ်သည်။ Loop သည် ထပ်နေသော Code ကို လျှော့ချပေးပြီး Pattern ဆွဲခြင်း၊ Item အများအပြား Process လုပ်ခြင်းတွင် အသုံးဝင်သည်။ Trace table ဖြင့် Loop တစ်ကြိမ်စီအတွင်း Value ပြောင်းလဲမှုကို စစ်နိုင်သည်။",
        "Write the steps in order, identify the repeated block, choose a loop count or condition and trace at least two iterations.",
        "အဆင့်များကို အစဉ်လိုက်ရေးပါ။ ထပ်လုပ်ရမည့် Block ကို သတ်မှတ်ပါ။ Loop count သို့မဟုတ် Condition ရွေးပြီး အနည်းဆုံး Iteration နှစ်ကြိမ် Trace လုပ်ပါ။"
      ],
      [
        "Programming errors",
        "A syntax error occurs when code breaks the grammar rules of the programming language, such as misspelling a command, missing punctuation or incorrect indentation. A logic error occurs when a program runs but produces an incorrect result. Debugging means finding and correcting faults. Read error messages, inspect variable values, test small sections and use known test data to locate a problem.",
        "Syntax error သည် Command စာလုံးပေါင်းမှားခြင်း၊ Punctuation ပျောက်ခြင်း သို့မဟုတ် Indentation မမှန်ခြင်းကဲ့သို့ Programming language ၏ Grammar စည်းမျဉ်းကို ချိုးဖောက်သည့်အခါ ဖြစ်သည်။ Logic error သည် Program အလုပ်လုပ်သော်လည်း ရလဒ်မှားသည့်အခါ ဖြစ်သည်။ Debugging သည် Fault ရှာဖွေပြင်ဆင်ခြင်းဖြစ်သည်။ Error message ဖတ်ခြင်း၊ Variable စစ်ခြင်းနှင့် Test data အသုံးပြုခြင်းတို့ ပြုလုပ်ပါ။",
        "Reproduce the error, read the message, inspect the relevant line and variable values, change one thing and retest.",
        "Error ကို ပြန်ဖြစ်စေပါ။ Message ဖတ်ပါ။ သက်ဆိုင်ရာ Line နှင့် Variable ကို စစ်ပါ။ တစ်ကြိမ်လျှင် အချက်တစ်ခု ပြင်ပြီး ပြန်စမ်းပါ။"
      ],
      [
        "Using lists in a Python program",
        "A list stores an ordered collection of items in one variable. Python list literals use square brackets, with items separated by commas. Individual elements can be accessed using an index. Lists can store repeated items or different values, depending on the task. A loop can process each item. The program should check index positions carefully because using an invalid index causes an error.",
        "List သည် Item အများအပြားကို Variable တစ်ခုတည်းတွင် အစီအစဉ်လိုက် သိမ်းထားသည်။ Python list ကို Square bracket `[]` ဖြင့် ရေးပြီး Item များကို Comma ဖြင့် ခွဲသည်။ Index အသုံးပြု၍ Element တစ်ခုစီ ဝင်ရောက်နိုင်သည်။ Loop ဖြင့် Item အားလုံးကို Process လုပ်နိုင်သည်။ မရှိသော Index သုံးပါက Error ဖြစ်နိုင်သောကြောင့် စစ်ဆေးရမည်။",
        "Create a list of words, access one item by index, append a new item and loop through the full list.",
        "Word များပါသော List ဖန်တီးပါ။ Index ဖြင့် Item တစ်ခု ရယူပါ။ Item အသစ် Append လုပ်ပြီး List တစ်ခုလုံးကို Loop ဖြင့် လှည့်ပါ။"
      ],
      [
        "Use of selection in an algorithm",
        "Selection chooses which instructions run based on a condition. A condition evaluates to True or False. Python uses structures such as `if`, `elif` and `else`. A comparison operator checks values, while logical operators can combine conditions. Good selection logic should cover the required cases and avoid gaps or overlapping conditions.",
        "Selection သည် Condition တစ်ခုအပေါ် မူတည်ပြီး မည်သည့် Instruction လုပ်မည်ကို ရွေးချယ်သည်။ Condition သည် True သို့မဟုတ် False ဖြစ်သည်။ Python တွင် `if`၊ `elif` နှင့် `else` ကို အသုံးပြုသည်။ Comparison operator သည် Value နှိုင်းယှဉ်ပြီး Logical operator များက Condition ပေါင်းစပ်နိုင်သည်။ Case အားလုံးကို ဖုံးလွှမ်းပြီး မထပ်မကျန်အောင် စီစဉ်ရမည်။",
        "Write a condition in plain language, translate it into an if/else structure and test both True and False cases.",
        "Condition ကို ရိုးရိုးဘာသာဖြင့် ရေးပါ။ if/else Structure အဖြစ် ပြောင်းပြီး True/False Case နှစ်မျိုးလုံး စမ်းပါ။"
      ],
      [
        "Creating a simple chatbot",
        "A chatbot is a program that communicates with a user through messages and responses. A simple rule-based chatbot can ask questions, read input, compare a response with expected words and return a prepared reply. The Student Book places chatbot development in the context of artificial intelligence and the historical Turing test. A clear chatbot should make its limits known and should not pretend that a scripted reply is human understanding.",
        "Chatbot သည် Message နှင့် Reply များဖြင့် User နှင့် ဆက်သွယ်သော Program ဖြစ်သည်။ ရိုးရှင်းသော Rule-based chatbot သည် မေးခွန်းမေးခြင်း၊ Input ဖတ်ခြင်း၊ Response ကို သတ်မှတ်ထားသော စကားလုံးနှင့် နှိုင်းယှဉ်ခြင်း၊ ကြိုတင်ပြင်ဆင်ထားသော Reply ပြန်ပေးခြင်းတို့ ပြုလုပ်နိုင်သည်။ AI နှင့် Turing test အကြောင်းအရာနှင့်လည်း ဆက်စပ်သည်။ Script ဖြင့်ပြန်သော Reply ကို လူသားနားလည်မှုဟု မမှားယွင်းစေရ။",
        "Plan a greeting, ask one question, validate the response and provide a relevant reply or fallback message.",
        "နှုတ်ဆက်စကားရေးပါ။ မေးခွန်းတစ်ခုမေးပါ။ Response စစ်ဆေးပြီး သက်ဆိုင်ရာ Reply သို့မဟုတ် Fallback message ပြန်ပေးပါ။"
      ],
      [
        "Subprograms in an algorithm",
        "A subprogram is a named, self-contained part of a larger program that performs a particular task. It helps reduce repetition, make code easier to test and organise a solution into smaller parts. A subprogram may be a procedure or a function. A function commonly returns a value, while a procedure performs an action. Parameters allow information to be passed into a subprogram.",
        "Subprogram သည် Program ကြီးတစ်ခုအတွင်း သီးခြားအလုပ်တစ်ခု လုပ်ဆောင်သော အမည်ပေးထားသည့် Code အပိုင်းဖြစ်သည်။ ထပ်နေသော Code လျှော့ချခြင်း၊ Test လုပ်ရလွယ်ခြင်းနှင့် ပြဿနာကို အပိုင်းငယ်များအဖြစ် စီမံခြင်းတို့ အထောက်အကူပြုသည်။ Procedure သို့မဟုတ် Function ဖြစ်နိုင်သည်။ Function သည် Value ပြန်ပေးလေ့ရှိပြီး Procedure သည် Action လုပ်ဆောင်သည်။ Parameter ဖြင့် Data ပေးပို့နိုင်သည်။",
        "Identify a repeated task, give it a descriptive name, define any parameters and call it where needed.",
        "ထပ်ခါလုပ်ရသော Task ကို ရှာပါ။ အဓိပ္ပာယ်ရှိသော အမည်ပေးပါ။ Parameter သတ်မှတ်ပြီး လိုအပ်သည့်နေရာတွင် Call လုပ်ပါ။"
      ],
      [
        "Creating a missing word game",
        "A missing-word game combines several programming ideas. It may store sentences and missing words in lists, select a question, display a sentence with a gap, accept a guess, compare it with the answer and update a score. Sequence controls the steps, selection decides whether the answer is correct, iteration moves through multiple questions and subprograms can separate tasks such as asking a question or checking an answer.",
        "Missing-word game သည် Programming concept များစွာကို ပေါင်းစပ်သည်။ Sentence နှင့် Missing word များကို List ထဲသိမ်းနိုင်သည်။ မေးခွန်းရွေး၊ Gap ပါသော Sentence ပြ၊ Guess လက်ခံ၊ အဖြေနှင့် နှိုင်းယှဉ်ပြီး Score ပြောင်းနိုင်သည်။ Sequence က အဆင့်စဉ်ကို စီမံပြီး Selection က မှန်/မှားဆုံးဖြတ်သည်။ Iteration က မေးခွန်းများကို ထပ်လုပ်စေပြီး Subprogram များက Task ခွဲပေးသည်။",
        "Create a short word list and sentence list, ask a user to fill the gap, check the answer and update a score.",
        "Word list နှင့် Sentence list အသေးတစ်ခု ဖန်တီးပါ။ Gap ဖြည့်ရန် User ကိုမေးပါ။ အဖြေစစ်ပြီး Score ပြောင်းပါ။"
      ]
    ],
    "terms": [
      [
        "Algorithm",
        "A clear sequence of steps for solving a problem.",
        "ပြဿနာဖြေရှင်းရန် ရှင်းလင်းသော အဆင့်အစီအစဉ်။"
      ],
      [
        "Pseudocode",
        "A structured description of an algorithm using plain language-like statements.",
        "Programming language အပြည့်မသုံးဘဲ Algorithm ဖော်ပြသော စနစ်တကျ စာသား။"
      ],
      [
        "Flowchart",
        "A diagram using symbols and arrows to represent an algorithm.",
        "Symbol နှင့် Arrow များဖြင့် Algorithm ဖော်ပြသော Diagram။"
      ],
      [
        "Turtle graphics",
        "Drawing by controlling a cursor with movement and pen commands.",
        "Movement/Pen command များဖြင့် Cursor ထိန်းချုပ်ပုံဆွဲခြင်း။"
      ],
      [
        "Command",
        "An instruction telling a program or device to perform an action.",
        "Program/Device ကို လုပ်ဆောင်ချက်တစ်ခု ပြုလုပ်ရန် ညွှန်ကြားချက်။"
      ],
      [
        "Sequence",
        "Instructions executed in a particular order.",
        "သတ်မှတ်ထားသော အစီအစဉ်အတိုင်း လုပ်ဆောင်သော Instruction များ။"
      ],
      [
        "Iteration",
        "Repeating a set of instructions.",
        "Instruction အစုတစ်ခုကို ထပ်ခါလုပ်ခြင်း။"
      ],
      [
        "Loop",
        "A programming structure that repeats instructions.",
        "Instruction များကို ထပ်လုပ်စေသော Programming structure။"
      ],
      [
        "For loop",
        "A loop often used to repeat a known number of times or over a sequence.",
        "သတ်မှတ်အကြိမ်ရေ သို့မဟုတ် Sequence တစ်ခုအပေါ် ထပ်လုပ်သော Loop။"
      ],
      [
        "Condition",
        "A test that evaluates to true or false.",
        "True/False ရလဒ် ထုတ်ပေးသော စမ်းသပ်ချက်။"
      ],
      [
        "Variable",
        "A named place for storing a value that may change.",
        "ပြောင်းလဲနိုင်သော Value သိမ်းသည့် အမည်ပေးနေရာ။"
      ],
      [
        "Assignment",
        "Giving a value to a variable.",
        "Variable တစ်ခုသို့ Value သတ်မှတ်ပေးခြင်း။"
      ],
      [
        "Syntax error",
        "An error caused by code that breaks language grammar rules.",
        "Programming language Grammar စည်းမျဉ်း ချိုးဖောက်သော Code ကြောင့် ဖြစ်သော Error။"
      ],
      [
        "Logic error",
        "A fault where a program runs but produces an incorrect result.",
        "Program အလုပ်လုပ်သော်လည်း ရလဒ်မှားစေသော Error။"
      ],
      [
        "Debugging",
        "Finding and correcting errors in a program.",
        "Program အတွင်း Error ရှာဖွေပြင်ဆင်ခြင်း။"
      ],
      [
        "Test data",
        "Input values used to check program behaviour.",
        "Program အပြုအမူ စစ်ဆေးရန် အသုံးပြုသော Input value များ။"
      ],
      [
        "List",
        "An ordered collection of items stored under one variable name.",
        "Variable တစ်ခုအမည်အောက်တွင် အစီအစဉ်လိုက် သိမ်းထားသော Item အစု။"
      ],
      [
        "Element",
        "One item contained in a list or sequence.",
        "List/Sequence အတွင်းရှိ Item တစ်ခု။"
      ],
      [
        "Index",
        "A position used to access an item in a sequence.",
        "Sequence အတွင်း Item ရယူရန် အသုံးပြုသော နေရာနံပါတ်။"
      ],
      [
        "Append",
        "An operation that adds an item to the end of a list.",
        "List ၏ အဆုံးတွင် Item ထပ်ထည့်သော လုပ်ဆောင်ချက်။"
      ],
      [
        "Selection",
        "Choosing instructions according to a condition.",
        "Condition အလိုက် Instruction ရွေးချယ်ခြင်း။"
      ],
      [
        "if statement",
        "A selection statement that runs a block when a condition is true.",
        "Condition မှန်လျှင် Block တစ်ခု လုပ်ဆောင်သော Selection statement။"
      ],
      [
        "else",
        "A branch used when the preceding condition is false.",
        "အရင် Condition မမှန်သည့်အခါ အသုံးပြုသော Branch။"
      ],
      [
        "Boolean",
        "A data type with the values True and False.",
        "True နှင့် False တန်ဖိုးရှိသော Data type။"
      ],
      [
        "Comparison operator",
        "An operator that compares two values.",
        "Value နှစ်ခုကို နှိုင်းယှဉ်သော Operator။"
      ],
      [
        "Chatbot",
        "A program that communicates with users through conversation.",
        "စကားပြောပုံစံဖြင့် User နှင့် ဆက်သွယ်သော Program။"
      ],
      [
        "Artificial intelligence (AI)",
        "Computer methods that perform tasks associated with intelligent behaviour.",
        "အသိဉာဏ်ဆန်သော အပြုအမူနှင့်ဆက်စပ်သည့် Task များလုပ်ဆောင်သော Computer နည်းလမ်းများ။"
      ],
      [
        "Turing test",
        "A proposed test about whether a machine's conversation can be distinguished from a human's.",
        "စက်၏ စကားပြောမှုကို လူသားနှင့် ခွဲခြားနိုင်ခြင်း ရှိ/မရှိ စမ်းသပ်သည့် အယူအဆ။"
      ],
      [
        "Subprogram",
        "A named part of a program that performs a specific task.",
        "သီးခြား Task တစ်ခုလုပ်ဆောင်သော Program အပိုင်း။"
      ],
      [
        "Procedure",
        "A subprogram that performs an action and may not return a value.",
        "Action လုပ်ဆောင်ပြီး Value ပြန်မပေးနိုင်သည့် Subprogram။"
      ],
      [
        "Function",
        "A subprogram that returns a value to its caller.",
        "ခေါ်ယူသူထံ Value ပြန်ပေးသော Subprogram။"
      ],
      [
        "Parameter",
        "A named input accepted by a subprogram.",
        "Subprogram က လက်ခံသော အမည်ပေး Input။"
      ],
      [
        "Return value",
        "The value sent back by a function.",
        "Function မှ ပြန်ပေးသော Value။"
      ],
      [
        "Indentation",
        "Leading spaces that define code blocks in Python.",
        "Python တွင် Code block သတ်မှတ်သော ရှေ့နေရာလွတ်များ။"
      ],
      [
        "Turtle",
        "A drawing cursor controlled by programming commands.",
        "Programming command များဖြင့် ထိန်းချုပ်သော ပုံဆွဲ Cursor။"
      ]
    ],
    "examples": [
      "A turtle square repeats forward movement and a 90-degree turn four times.",
      "A list such as `words = [\"red\", \"blue\", \"gold\"]` stores three strings in order.",
      "A chatbot can use an if/else condition to choose a reply based on a word typed by the user."
    ],
    "examplesMy": [
      "Turtle ဖြင့် Square ဆွဲရာတွင် Forward ရွှေ့ခြင်းနှင့် 90-degree လှည့်ခြင်းကို လေးကြိမ် ထပ်လုပ်နိုင်သည်။",
      "`words = [\"red\", \"blue\", \"gold\"]` ကဲ့သို့ List တစ်ခုသည် String သုံးခုကို အစဉ်လိုက် သိမ်းထားသည်။",
      "Chatbot သည် User ရိုက်သော စကားလုံးအပေါ် မူတည်၍ Reply ရွေးရန် if/else Condition အသုံးပြုနိုင်သည်။"
    ],
    "table": {
      "caption": "Core programming structures",
      "headers": [
        "Structure",
        "Purpose",
        "Example / use"
      ],
      "rows": [
        [
          "Sequence",
          "Run instructions in order",
          "Read input → calculate → display"
        ],
        [
          "Selection",
          "Choose a path using a condition",
          "if score >= 50"
        ],
        [
          "Iteration",
          "Repeat instructions",
          "for each word in words"
        ],
        [
          "List",
          "Store several ordered items",
          "words = [\"red\", \"blue\"]"
        ],
        [
          "Subprogram",
          "Separate a reusable task",
          "check_answer(guess)"
        ],
        [
          "Debugging",
          "Find and correct faults",
          "Test a small input"
        ]
      ]
    },
    "activities": [
      [
        "Turtle drawing",
        "Write instructions to draw a square, triangle and rectangle. Include movement distances and turn angles.",
        "Square၊ Triangle နှင့် Rectangle ဆွဲရန် Instruction ရေးပါ။ Movement distance နှင့် Turn angle ထည့်ပါ။"
      ],
      [
        "Trace table",
        "Create a trace table for a loop that adds numbers from 1 to 5 and records the running total.",
        "1 မှ 5 အထိ ဂဏန်းပေါင်းသော Loop အတွက် Running total မှတ်တမ်းပါသော Trace table ပြုလုပ်ပါ။"
      ],
      [
        "Python list and selection",
        "Write a program that stores five words in a list and prints only the words longer than four letters.",
        "Word ငါးလုံး List ထဲသိမ်းပြီး စာလုံး 4 လုံးထက်ရှည်သော Word များကိုသာ Print ထုတ်သော Program ရေးပါ။"
      ],
      [
        "Chatbot mini project",
        "Build a rule-based chatbot with at least three responses, input validation and a polite fallback response.",
        "Reply သုံးမျိုးအနည်းဆုံး၊ Input validation နှင့် ယဉ်ကျေးသော Fallback response ပါသော Rule-based chatbot ဖန်တီးပါ။"
      ]
    ],
    "slides": [
      "Algorithms, pseudocode and turtle commands",
      "Sequencing, loops and tracing iterations",
      "Syntax errors, logic errors and debugging",
      "Python lists, elements and indexes",
      "Selection with if, elif and else",
      "Rule-based chatbot design and testing",
      "Procedures, functions and parameters",
      "Combining programming ideas in a word game"
    ],
    "essays": [
      [
        "Explain the difference between a syntax error and a logic error.",
        "A syntax error breaks the rules of the programming language and may prevent code from running. A logic error allows the program to run but causes an incorrect result. Debugging involves finding and correcting both kinds of fault.",
        [
          "breaks language rules",
          "prevents running",
          "incorrect result",
          "debugging",
          "correcting"
        ]
      ],
      [
        "Describe how a Python list can be used in a simple word game.",
        "A list can store several words or sentences in order. The program can select or access an item by index, display a sentence with a missing word, accept a guess, compare it with the stored answer and update the score.",
        [
          "stores",
          "words",
          "sentences",
          "index",
          "guess",
          "compare",
          "score"
        ]
      ],
      [
        "Explain why iteration is useful in an algorithm.",
        "Iteration repeats instructions, avoiding the need to write the same steps many times. It can process each item in a list or repeat a drawing command a fixed number of times. A loop should have an appropriate count or stopping condition.",
        [
          "repeats",
          "instructions",
          "avoid",
          "list",
          "fixed number",
          "stopping condition"
        ]
      ],
      [
        "Describe how subprograms help organise a larger program.",
        "Subprograms divide a solution into named tasks, reduce repeated code and make testing easier. A function may return a value, while a procedure performs an action. Parameters pass required information into the subprogram.",
        [
          "named tasks",
          "reduce repetition",
          "testing",
          "function",
          "procedure",
          "parameters"
        ]
      ]
    ]
  },
  {
    "id": 6,
    "title": "Software and communication",
    "myTitle": "Software နှင့် ဆက်သွယ်ရေး",
    "range": "Student Book pp. 116–138",
    "accent": "cyan",
    "overview": "This unit considers surveillance technology and ethics, types of software, operating systems and utility software, internet hardware, wireless communications, the internet and World Wide Web, and data breaches and cyber-crime.",
    "overviewMy": "ဤယူနစ်တွင် Surveillance technology နှင့် Ethics၊ Software အမျိုးအစားများ၊ Operating system နှင့် Utility software၊ Internet hardware၊ Wireless communication၊ Internet/World Wide Web နှင့် Data breach/Cyber-crime တို့ကို လေ့လာမည်။",
    "objectives": [
      [
        "Explain how surveillance technologies work and discuss privacy and ethical concerns.",
        "Surveillance technology အလုပ်လုပ်ပုံနှင့် Privacy/Ethical စိုးရိမ်ချက်များကို ရှင်းပြရန်။"
      ],
      [
        "Distinguish application, system and utility software and describe operating-system roles.",
        "Application၊ System နှင့် Utility software ကို ခွဲခြားပြီး Operating system ၏ လုပ်ဆောင်ချက်ကို ဖော်ပြရန်။"
      ],
      [
        "Identify internet hardware and compare wireless communication methods.",
        "Internet hardware များကို ခွဲခြားပြီး Wireless communication နည်းလမ်းများကို နှိုင်းယှဉ်ရန်။"
      ],
      [
        "Explain how the internet and WWW work and identify ways to reduce cyber-crime risk.",
        "Internet/WWW အလုပ်လုပ်ပုံနှင့် Cyber-crime အန္တရာယ်လျှော့ချနည်းများကို ရှင်းပြရန်။"
      ]
    ],
    "lessons": [
      [
        "Surveillance technology",
        "Surveillance is the observation or monitoring of people, places or activities. Technologies can include CCTV cameras, facial recognition, GPS location tracking, smartphone and smartwatch sensors, spyware and interception of digital messages. Surveillance may help protect people and investigate crime, but collecting information without clear purpose or consent can affect privacy and freedom. The Student Book introduces these technologies and asks learners to consider their consequences.",
        "Surveillance သည် လူ၊ နေရာ သို့မဟုတ် လုပ်ဆောင်မှုများကို စောင့်ကြည့်လေ့လာခြင်းဖြစ်သည်။ CCTV၊ Facial recognition၊ GPS tracking၊ Smartphone/Smartwatch sensor၊ Spyware နှင့် Digital message ကြားဖြတ်ဖတ်ခြင်းတို့ ပါဝင်နိုင်သည်။ လုံခြုံရေးနှင့် စုံစမ်းစစ်ဆေးမှုအတွက် အထောက်အကူဖြစ်နိုင်သော်လည်း ရည်ရွယ်ချက်/ခွင့်ပြုချက်မရှင်းဘဲ Data စုဆောင်းခြင်းသည် Privacy နှင့် Freedom ကို ထိခိုက်စေနိုင်သည်။",
        "For each surveillance example, identify who collects the data, what is collected, the purpose and who can access it.",
        "Surveillance ဥပမာတစ်ခုစီအတွက် Data စုဆောင်းသူ၊ စုဆောင်းသော Data၊ ရည်ရွယ်ချက်နှင့် ဝင်ရောက်ကြည့်ရှုနိုင်သူကို ဖော်ပြပါ။"
      ],
      [
        "Types of software",
        "Software is a set of programs and instructions. Application software helps users perform tasks such as writing documents, editing images or browsing the web. System software manages hardware and provides the platform for applications. Utility software performs maintenance, protection or management tasks. Some software is proprietary, while open-source software makes source code available under a licence that permits specified uses and changes.",
        "Software သည် Program နှင့် Instruction များအစုဖြစ်သည်။ Application software သည် Document ရေးခြင်း၊ ပုံပြင်ခြင်း၊ Web browsing ကဲ့သို့ User task များကို ကူညီသည်။ System software သည် Hardware ကို စီမံပြီး Application များအတွက် Platform ပေးသည်။ Utility software သည် Maintenance၊ Protection နှင့် Management လုပ်ငန်းများ ဆောင်ရွက်သည်။ Proprietary နှင့် Open-source ကွာခြားချက်ကိုလည်း နားလည်ရမည်။",
        "Classify examples of software as application, system or utility and explain each choice.",
        "Software ဥပမာများကို Application၊ System သို့မဟုတ် Utility အဖြစ် ခွဲခြားပြီး ရွေးချယ်ရသည့်အကြောင်း ရှင်းပြပါ။"
      ],
      [
        "Operating systems",
        "An operating system (OS) manages the computer and provides services to programs and users. It provides a user interface, manages memory and processor time, controls peripherals, organises files, supports multitasking and provides security features. Interfaces may include a graphical user interface (GUI), command-line interface (CLI), menu or touch/gesture-based controls.",
        "Operating system (OS) သည် Computer ကို စီမံပြီး Program နှင့် User များအတွက် ဝန်ဆောင်မှု ပေးသည်။ User interface၊ Memory/Processor time၊ Peripheral၊ File၊ Multitasking နှင့် Security တို့ကို စီမံသည်။ GUI၊ CLI၊ Menu သို့မဟုတ် Touch/Gesture interface များ အသုံးပြုနိုင်သည်။",
        "Compare a GUI and CLI by considering how a user gives commands, ease of learning and control.",
        "User က Command ပေးပုံ၊ သင်ယူရလွယ်မှုနှင့် ထိန်းချုပ်နိုင်မှုတို့ကို စဉ်းစား၍ GUI နှင့် CLI ကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Utility software",
        "Utility software helps maintain, protect or optimise a computer system. Examples include antivirus tools, firewalls, backup utilities, encryption tools, disk clean-up and defragmentation utilities, file compression and system information tools. Different utilities solve different problems; for example, a backup provides a recoverable copy, while antivirus software helps detect or remove malicious code.",
        "Utility software သည် Computer system ကို ထိန်းသိမ်း၊ ကာကွယ် သို့မဟုတ် အကောင်းဆုံးလုပ်ဆောင်စေသည်။ Antivirus၊ Firewall၊ Backup utility၊ Encryption၊ Disk cleanup/Defragmentation၊ File compression နှင့် System information tool တို့ ပါဝင်သည်။ Utility တစ်မျိုးစီ၏ ရည်ရွယ်ချက် မတူကြောင်း သိရမည်။",
        "Choose a suitable utility for a stated problem and explain what it does and what it does not guarantee.",
        "ပြဿနာတစ်ခုအတွက် သင့်တော်သော Utility ရွေးပြီး ၎င်းလုပ်ဆောင်ပုံနှင့် အာမခံမပေးနိုင်သည့်အရာကို ရှင်းပြပါ။"
      ],
      [
        "Internet hardware",
        "Internet access depends on hardware that connects devices and networks. A modem connects a local network to an internet service over a provider's connection. A router forwards data between networks. A switch connects devices within a local network. A wireless access point allows Wi-Fi devices to join a network, and a network interface card (NIC) connects an individual device. The exact equipment depends on the network design.",
        "Internet ချိတ်ဆက်ရန် စက်များနှင့် Network များကို ချိတ်ဆက်ပေးသော Hardware များ လိုအပ်သည်။ Modem သည် Provider connection မှတစ်ဆင့် Local network ကို Internet နှင့် ချိတ်ဆက်သည်။ Router သည် Network များအကြား Data ပို့ပေးသည်။ Switch သည် Local network အတွင်း စက်များချိတ်ဆက်သည်။ Wireless access point သည် Wi‑Fi device များကို ချိတ်ဆက်ပေးပြီး NIC သည် စက်တစ်ခုချင်းစီကို Network ချိတ်ဆက်စေသည်။",
        "Draw a small home network and label the modem, router, switch, access point and connected devices where appropriate.",
        "အိမ်သုံး Network ပုံငယ်ဆွဲပြီး လိုအပ်သည့်နေရာတွင် Modem၊ Router၊ Switch၊ Access point နှင့် ချိတ်ဆက်စက်များ Label တပ်ပါ။"
      ],
      [
        "Wireless communication technology",
        "Wireless devices exchange information using electromagnetic signals rather than a direct data cable. Wi-Fi is commonly used for local network access, Bluetooth for short-range device connections and NFC for very short-range contactless communication. Each has different range, data rate, power use, pairing process and appropriate applications. Wireless signals can be affected by distance, obstacles and interference, and wireless networks need suitable security settings.",
        "Wireless device များသည် Data cable တိုက်ရိုက်မသုံးဘဲ Electromagnetic signal ဖြင့် သတင်းအချက်အလက် ဖလှယ်သည်။ Wi‑Fi ကို Local network access အတွက်၊ Bluetooth ကို အနီးကပ် Device ချိတ်ဆက်မှုအတွက်၊ NFC ကို အလွန်နီးကပ်သော Contactless communication အတွက် အသုံးပြုလေ့ရှိသည်။ Range၊ Data rate၊ Power use နှင့် Application မတူကြသည်။ အကွာအဝေး၊ အတားအဆီးနှင့် Interference ကြောင့် Signal ထိခိုက်နိုင်သည်။",
        "Select Wi-Fi, Bluetooth or NFC for a scenario and justify the choice using range and purpose.",
        "အခြေအနေတစ်ခုအတွက် Wi‑Fi၊ Bluetooth သို့မဟုတ် NFC ရွေးပြီး Range နှင့် ရည်ရွယ်ချက်အပေါ် အကြောင်းပြပါ။"
      ],
      [
        "The internet and the World Wide Web",
        "The internet is the global network infrastructure connecting networks and devices. The World Wide Web is a service that uses the internet to access linked pages and resources. A web browser requests resources from a web server. Domain Name System (DNS) helps translate a domain name into an IP address. HTML is used to structure web page content. An Internet Service Provider (ISP) provides access to the internet.",
        "Internet သည် ကွန်ရက်များနှင့် Device များကို ကမ္ဘာတစ်ဝန်း ချိတ်ဆက်ထားသော Network infrastructure ဖြစ်သည်။ World Wide Web သည် Internet ကို အသုံးပြု၍ ချိတ်ဆက်ထားသော Web page နှင့် Resource များကို ဝင်ရောက်ကြည့်ရှုသော ဝန်ဆောင်မှုဖြစ်သည်။ Browser သည် Web server ထံ Resource တောင်းဆိုသည်။ DNS သည် Domain name ကို IP address နှင့် ချိတ်ဆက်ပေးသည်။ HTML သည် Web page content တည်ဆောက်ရန် သုံးသည်။",
        "Trace what happens after a user enters a web address: browser request, DNS lookup, server response and page display.",
        "User က Web address ရိုက်ပြီးနောက် Browser request၊ DNS lookup၊ Server response နှင့် Page display ဖြစ်ပုံကို အစဉ်လိုက် Trace လုပ်ပါ။"
      ],
      [
        "Surveillance ethics",
        "Surveillance creates ethical questions about safety, privacy, consent, fairness, proportionality and who controls collected information. A camera in a public area may have a clear safety purpose, while continuous tracking of a person may be intrusive. Good decisions consider the purpose, necessity, duration, access controls, retention period and whether people are informed. A technology being possible does not automatically make its use fair or appropriate.",
        "Surveillance တွင် Safety၊ Privacy၊ Consent၊ Fairness၊ Proportionality နှင့် စုဆောင်းထားသော Data ကို မည်သူထိန်းချုပ်သနည်းဆိုသည့် Ethical မေးခွန်းများ ရှိသည်။ အများပြည်သူနေရာရှိ Camera သည် လုံခြုံရေးရည်ရွယ်ချက် ရှိနိုင်သော်လည်း လူတစ်ဦးကို အမြဲတမ်း Tracking လုပ်ခြင်းသည် Privacy ကို ထိခိုက်နိုင်သည်။ ရည်ရွယ်ချက်၊ လိုအပ်မှု၊ ကြာချိန်၊ Access control နှင့် အသိပေးမှုတို့ကို စဉ်းစားရမည်။",
        "Debate a surveillance scenario by listing benefits, affected people, privacy risks and safeguards.",
        "Surveillance အခြေအနေတစ်ခုကို အကျိုးကျေးဇူး၊ သက်ရောက်သူ၊ Privacy risk နှင့် ကာကွယ်ချက်များ စာရင်းပြုစု၍ ဆွေးနွေးပါ။"
      ],
      [
        "Data breaches and cyber-crime",
        "A data breach occurs when information is accessed, disclosed or taken without authorisation. Cyber-crime includes illegal activity using computers or networks. Risks include phishing, malware, stolen passwords, unauthorised access and misuse of personal information. Safer practices include unique strong passwords, multi-factor authentication where available, software updates, careful link checking, backups and reporting suspicious activity. Individuals and organisations should limit access to information to those who need it.",
        "Data breach သည် ခွင့်ပြုချက်မရှိဘဲ Information ကို ဝင်ရောက်ကြည့်ရှုခြင်း၊ ဖော်ထုတ်ခြင်း သို့မဟုတ် ယူဆောင်ခြင်းဖြစ်သည်။ Cyber-crime သည် Computer/Network အသုံးပြု၍ ဥပဒေမဲ့လုပ်ဆောင်မှုများဖြစ်သည်။ Phishing၊ Malware၊ Password ခိုးယူမှု၊ ခွင့်မပြုသော Access နှင့် ကိုယ်ရေးအချက်အလက် အလွဲသုံးစားမှုတို့ ပါဝင်သည်။ ခိုင်မာပြီး မတူညီသော Password၊ MFA၊ Software update၊ Link စစ်ဆေးခြင်း၊ Backup နှင့် သံသယဖြစ်ဖွယ်လုပ်ရပ် Report လုပ်ခြင်းတို့ ပြုလုပ်ပါ။",
        "Inspect a sample message for suspicious links, urgent language, requests for credentials and mismatched sender details.",
        "နမူနာ Message တစ်ခုတွင် သံသယဖြစ်ဖွယ် Link၊ အရေးတကြီးဖိအားပေးမှု၊ Password တောင်းခံမှုနှင့် ပေးပို့သူအချက်အလက် မကိုက်ညီမှုကို စစ်ဆေးပါ။"
      ]
    ],
    "terms": [
      [
        "Surveillance",
        "Observation or monitoring of people, places or activities.",
        "လူ၊ နေရာ သို့မဟုတ် လုပ်ဆောင်မှုများကို စောင့်ကြည့်ခြင်း။"
      ],
      [
        "CCTV",
        "Closed-circuit television used to monitor an area.",
        "နေရာတစ်ခုကို စောင့်ကြည့်ရန် အသုံးပြုသော CCTV ကင်မရာစနစ်။"
      ],
      [
        "Facial recognition",
        "Technology that analyses facial features to identify or compare faces.",
        "မျက်နှာအင်္ဂါရပ်များကို ခွဲခြမ်းပြီး လူကို ခွဲခြားသတ်မှတ်သော နည်းပညာ။"
      ],
      [
        "GPS",
        "A satellite-based system used to determine location.",
        "တည်နေရာသတ်မှတ်ရန် Satellite အသုံးပြုသော စနစ်။"
      ],
      [
        "Spyware",
        "Software that secretly collects information about a user or device.",
        "User/Device အကြောင်းအချက်အလက်ကို လျှို့ဝှက်စုဆောင်းသော Software။"
      ],
      [
        "Keylogger",
        "Software or hardware that records keyboard input.",
        "Keyboard မှ ရိုက်သွင်းမှုများကို မှတ်တမ်းတင်သော Software/Hardware။"
      ],
      [
        "Privacy",
        "The ability to control access to personal information and activities.",
        "ကိုယ်ရေးအချက်အလက်နှင့် လုပ်ဆောင်မှုများကို မည်သူဝင်ရောက်နိုင်သည် ထိန်းချုပ်ခွင့်။"
      ],
      [
        "Consent",
        "Freely given agreement to a particular action or data use.",
        "လုပ်ဆောင်မှု/Data အသုံးပြုမှုတစ်ခုအတွက် လွတ်လပ်စွာ ပေးသော သဘောတူညီချက်။"
      ],
      [
        "Ethics",
        "Principles used to judge what is fair or appropriate.",
        "မျှတ/သင့်တော်မှုကို ဆုံးဖြတ်ရာတွင် အသုံးပြုသော ကိုယ်ကျင့်တရားစည်းမျဉ်းများ။"
      ],
      [
        "Application software",
        "Software that helps a user perform a specific task.",
        "User တစ်ဦး၏ သီးခြားလုပ်ငန်းတစ်ခုကို ကူညီသော Software။"
      ],
      [
        "System software",
        "Software that manages hardware and supports applications.",
        "Hardware စီမံပြီး Application များကို ပံ့ပိုးသော Software။"
      ],
      [
        "Utility software",
        "Software used to maintain, protect or optimise a system.",
        "System ထိန်းသိမ်း၊ ကာကွယ်၊ အကောင်းဆုံးလုပ်ဆောင်ရန် အသုံးပြုသော Software။"
      ],
      [
        "Operating system",
        "System software that manages resources and provides services to users and programs.",
        "Resource များစီမံပြီး User/Program များကို ဝန်ဆောင်မှုပေးသော System software။"
      ],
      [
        "GUI",
        "A graphical user interface using visual controls such as windows and icons.",
        "Window နှင့် Icon ကဲ့သို့ Visual control အသုံးပြုသော Interface။"
      ],
      [
        "CLI",
        "A command-line interface where users enter text commands.",
        "User က Text command ရိုက်ထည့်သော Interface။"
      ],
      [
        "Multitasking",
        "Running or managing more than one task during the same period.",
        "တစ်ချိန်တည်းတွင် Task တစ်ခုထက်ပို စီမံလုပ်ဆောင်ခြင်း။"
      ],
      [
        "Device driver",
        "Software that allows an operating system to communicate with hardware.",
        "OS နှင့် Hardware ဆက်သွယ်နိုင်စေသော Software။"
      ],
      [
        "Antivirus",
        "Utility software that detects and helps remove malicious software.",
        "Malicious software များကို ရှာဖွေဖယ်ရှားရန် ကူညီသော Utility။"
      ],
      [
        "Firewall",
        "A system that controls network traffic according to rules.",
        "စည်းမျဉ်းအလိုက် Network traffic ကို ထိန်းချုပ်သော စနစ်။"
      ],
      [
        "Backup",
        "A separate copy of data kept for recovery.",
        "ပြန်လည်ရယူရန် သီးခြားသိမ်းထားသော Data မိတ္တူ။"
      ],
      [
        "Encryption",
        "Transforming information so it can be read only with the appropriate key.",
        "သင့်တော်သော Key ရှိမှ ဖတ်နိုင်ရန် Information ကို ပြောင်းလဲဖုံးကွယ်ခြင်း။"
      ],
      [
        "Modem",
        "A device connecting a local network to a service provider's link.",
        "Local network ကို Provider link နှင့် ချိတ်ဆက်ပေးသော စက်။"
      ],
      [
        "Router",
        "A device that forwards data between different networks.",
        "Network များအကြား Data ပို့ပေးသော စက်။"
      ],
      [
        "Switch",
        "A device connecting multiple devices within a local network.",
        "Local network အတွင်း Device အများအပြား ချိတ်ဆက်ပေးသော စက်။"
      ],
      [
        "Wireless access point",
        "A device that lets wireless clients join a network.",
        "Wireless client များ Network ဝင်နိုင်စေသော စက်။"
      ],
      [
        "Network interface card (NIC)",
        "Hardware that provides a network connection for a device.",
        "Device တစ်ခုအတွက် Network connection ပေးသော Hardware။"
      ],
      [
        "Wi-Fi",
        "Wireless local-area networking technology.",
        "Wireless Local Area Network နည်းပညာ။"
      ],
      [
        "Bluetooth",
        "A short-range wireless technology for connecting devices.",
        "Device များ ချိတ်ဆက်ရန် Short-range wireless နည်းပညာ။"
      ],
      [
        "NFC",
        "Very short-range wireless communication often used for contactless actions.",
        "Contactless လုပ်ဆောင်မှုများတွင် သုံးသော အလွန်နီးကပ် Wireless ဆက်သွယ်ရေး။"
      ],
      [
        "Internet",
        "The global network of interconnected networks.",
        "ကမ္ဘာတစ်ဝန်း ချိတ်ဆက်ထားသော Network များ၏ အစု။"
      ],
      [
        "World Wide Web",
        "A service of linked web pages and resources accessed over the internet.",
        "Internet မှ ဝင်ရောက်ကြည့်ရှုသော ချိတ်ဆက်ထားသည့် Web page/Resource များ။"
      ],
      [
        "HTML",
        "A markup language used to structure web page content.",
        "Web page အကြောင်းအရာ ဖွဲ့စည်းရန် အသုံးပြုသော Markup language။"
      ],
      [
        "DNS",
        "A system that maps domain names to IP addresses.",
        "Domain name များကို IP address များနှင့် ချိတ်ဆက်ပေးသော စနစ်။"
      ],
      [
        "IP address",
        "A numeric address identifying an interface on an IP network.",
        "IP network ပေါ်ရှိ Interface ကို ခွဲခြားသတ်မှတ်သော ဂဏန်းလိပ်စာ။"
      ],
      [
        "Data breach",
        "Unauthorised access to or disclosure of protected information.",
        "ကာကွယ်ထားသော Information ကို ခွင့်ပြုချက်မရှိဘဲ ဝင်ရောက်/ဖော်ထုတ်ခြင်း။"
      ],
      [
        "Cyber-crime",
        "Illegal activity carried out using computers or networks.",
        "Computer/Network အသုံးပြု၍ ပြုလုပ်သော ဥပဒေမဲ့လုပ်ဆောင်မှု။"
      ],
      [
        "Phishing",
        "A deceptive attempt to obtain information by pretending to be trustworthy.",
        "ယုံကြည်ရသူအဖြစ် ဟန်ဆောင်၍ အချက်အလက်ရယူရန် လှည့်ဖြားခြင်း။"
      ]
    ],
    "examples": [
      "A firewall can restrict unwanted network connections, while antivirus software helps detect malicious files. They have different roles and are not complete protection by themselves.",
      "A Wi-Fi access point connects wireless devices to a local network; a switch connects wired devices in that network.",
      "A phishing message may imitate a trusted organisation and ask a user to click a link and enter a password."
    ],
    "examplesMy": [
      "Firewall သည် မလိုသော Network connection များကို ကန့်သတ်နိုင်ပြီး Antivirus သည် Malicious file များကို ရှာဖွေရာတွင် ကူညီသည်။ လုပ်ဆောင်ချက်မတူသလို တစ်ခုတည်းဖြင့် အပြည့်အဝ ကာကွယ်မပေးနိုင်ပါ။",
      "Wi‑Fi access point သည် Wireless device များကို Local network နှင့် ချိတ်ဆက်ပေးပြီး Switch သည် Wired device များကို ချိတ်ဆက်သည်။",
      "Phishing message သည် ယုံကြည်ရသော အဖွဲ့အစည်းအဖြစ် ဟန်ဆောင်ပြီး Link နှိပ်ကာ Password ထည့်ရန် တောင်းဆိုနိုင်သည်။"
    ],
    "table": {
      "caption": "Software categories and network hardware",
      "headers": [
        "Item",
        "Category / role",
        "Example or note"
      ],
      "rows": [
        [
          "Application software",
          "User tasks",
          "Word processor, spreadsheet"
        ],
        [
          "System software",
          "Manages hardware and applications",
          "Operating system, driver"
        ],
        [
          "Utility software",
          "Maintenance and protection",
          "Backup, antivirus, firewall"
        ],
        [
          "Modem",
          "Provider connection",
          "Links network to ISP service"
        ],
        [
          "Router",
          "Routes between networks",
          "Forwards packets to destination"
        ],
        [
          "Switch",
          "Connects devices in a LAN",
          "Connects wired computers"
        ],
        [
          "Access point",
          "Wireless LAN access",
          "Wi-Fi clients join network"
        ],
        [
          "NIC",
          "Device network interface",
          "Wired or wireless adapter"
        ]
      ]
    },
    "activities": [
      [
        "Software classification",
        "Sort common programs into application, system and utility software and justify each classification.",
        "အသုံးများသော Program များကို Application၊ System နှင့် Utility software အဖြစ် ခွဲပြီး အကြောင်းပြပါ။"
      ],
      [
        "Home network diagram",
        "Draw a connected home network and label the role of each hardware device.",
        "အိမ်သုံး Network ပုံဆွဲပြီး Hardware စက်တစ်ခုစီ၏ လုပ်ဆောင်ချက် Label တပ်ပါ။"
      ],
      [
        "Wireless choice",
        "Compare Wi-Fi, Bluetooth and NFC for a classroom sharing task, a wireless mouse and contactless payment.",
        "စာသင်ခန်း Network sharing၊ Wireless mouse နှင့် Contactless payment အတွက် Wi‑Fi၊ Bluetooth၊ NFC ကို နှိုင်းယှဉ်ပါ။"
      ],
      [
        "Phishing awareness",
        "Create a checklist of warning signs in a suspicious message and a safe response procedure.",
        "သံသယဖြစ်ဖွယ် Message ၏ သတိပေးလက္ခဏာများနှင့် လုံခြုံစွာ တုံ့ပြန်ပုံ Checklist ပြုလုပ်ပါ။"
      ]
    ],
    "slides": [
      "Surveillance tools and the data they collect",
      "Application, system and utility software",
      "Operating-system functions and interfaces",
      "Utilities for security, maintenance and backup",
      "Modems, routers, switches, access points and NICs",
      "Wi-Fi, Bluetooth and NFC communication",
      "Internet, WWW, DNS, HTML and IP addressing",
      "Privacy, consent and surveillance ethics",
      "Data breaches, phishing and cyber-crime prevention"
    ],
    "essays": [
      [
        "Compare application software, system software and utility software.",
        "Application software helps users complete specific tasks. System software manages hardware and provides services for applications. Utility software maintains, protects or optimises the computer, for example antivirus, backup or firewall tools.",
        [
          "user tasks",
          "manages hardware",
          "supports applications",
          "maintains",
          "protects",
          "antivirus"
        ]
      ],
      [
        "Explain the role of a router, switch and wireless access point.",
        "A router forwards data between networks. A switch connects devices within a local network, usually through cables. A wireless access point allows wireless devices to join the local network over Wi-Fi.",
        [
          "forwards data",
          "between networks",
          "switch",
          "local network",
          "wireless devices",
          "Wi-Fi"
        ]
      ],
      [
        "Discuss two benefits and two ethical concerns about surveillance technology.",
        "Surveillance can help improve safety and investigate incidents. Ethical concerns include privacy invasion, lack of consent, unfair monitoring, misuse of collected data and excessive retention. Use should have a clear purpose, be proportionate and limit access to the data.",
        [
          "safety",
          "investigate",
          "privacy",
          "consent",
          "misuse",
          "clear purpose",
          "access"
        ]
      ],
      [
        "Describe practical ways to reduce the risk of data breaches and cyber-crime.",
        "Use unique strong passwords and multi-factor authentication, install updates, back up important data, check links and sender details before responding, avoid sharing credentials and report suspicious messages or access.",
        [
          "strong passwords",
          "multi-factor",
          "updates",
          "back up",
          "check links",
          "credentials",
          "report"
        ]
      ]
    ]
  }
];
window.HJS_LESSON_SECTION_NAMES = ['Unit Overview','Learning Objectives','Detailed Study Notes','Topic-by-Topic Explanations','Key Definitions','Important Examples','Tables & Diagrams','Step-by-Step Instructions','Practical Activities','Worked Examples','Important Exam Points','Unit Glossary','Unit Presentation PowerPoint Slide Outline','Knowledge Check Quiz','One-Hour Secure Unit Examination'];
