/*
 * ND Labs
 * ============================================
 * FILE QUẢN LÝ CÁC LIÊN KẾT
 *
 * Mỗi phần tử có thể gồm:
 *
 * title         : Tên ô
 * description   : Nội dung mô tả
 * url           : Link khi bấm vào
 * image         : URL ảnh (không bắt buộc)
 * icon          : Chữ/icon nếu không dùng ảnh
 * color         : Màu nền của ô
 * textColor     : Màu tiêu đề
 * mutedColor    : Màu mô tả
 * iconColor     : Màu nền của icon
 * iconTextColor : Màu chữ bên trong icon
 * newTab        : true  = mở tab mới
 *                 false = mở trong tab hiện tại
 *
 * Có thể thêm bao nhiêu link tùy ý.
 */

const ndLinks = [
    {
        title: "ND Labs",
        description: "Trang web chính thức của ND Labs.",
        url: "https://ndsite.web.app/",
        image: "https://ndsite.web.app/assets/images/logo.png",

        color: "#EAF5FF",
        textColor: "#0068D9",
        mutedColor: "#58758E",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",

        newTab: true
    },

    {
        title: "EduSpace",
        description: "Hệ sinh thái giáo dục số dành cho học sinh Việt Nam.",
        url: "https://ndsite.web.app/eduspace",
        image: "https://ndsite.web.app/assets/images/logo.png",

        color: "#E8F4FF",
        textColor: "#0075F1",
        mutedColor: "#5C7890",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",

        newTab: true
    },

    {
        title: "GitHub",
        description: "Kho mã nguồn và các dự án của ND Labs.",
        url: "https://github.com/nd-site",
        icon: "GH",

        color: "#EEF7FF",
        textColor: "#12304A",
        mutedColor: "#668096",
        iconColor: "#12304A",
        iconTextColor: "#FFFFFF",

        newTab: true
    },

    {
        title: "Text to Image (V1)",
        description: "Chuyển đổi hình ảnh thành văn bản.",
        url: "/ndlabs/tti/v1",
        image: "https://ndsite.web.app/assets/images/logo.png",

        color: "#F0F9FF",
        textColor: "#0284C7",
        mutedColor: "#58758E",
        iconColor: "#0284C7",
        iconTextColor: "#FFFFFF",

        newTab: true
    },

    {
        title: "Text to Image (V2)",
        description: "Chuyển đổi hình ảnh thành văn bản.",
        url: "/ndlabs/tti/v2",
        image: "https://ndsite.web.app/assets/images/logo.png",

        color: "#F0F9FF",
        textColor: "#0284C7",
        mutedColor: "#58758E",
        iconColor: "#0284C7",
        iconTextColor: "#FFFFFF",

        newTab: true
    },

    {
        title: "Color (V1)",
        description: "Công cụ tạo và thử màu cho các khung link.",
        url: "/ndlabs/color/v1",
        icon: "ND",

        color: "#EAF5FF",
        textColor: "#0075F1",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",

        newTab: true
    },

    {
        title: "EduND - Làm bài kiểm tra (V1)",
        description: "Trang làm bài kiểm tra bằng cách tải lên file đề.",
        url: "/ndlabs/edu/v1",
        image: "https://ndsite.web.app/assets/images/logo.png",
        
        color: "#EEF7ED",
        textColor: "#0075F1",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",
        
        newTab: true
    },

    {
        title: "EduND - Làm bài kiểm tra (V2)",
        description: "Trang làm bài kiểm tra bằng cách tải lên file đề.",
        url: "/ndlabs/edu/v2",
        image: "https://ndsite.web.app/assets/images/logo.png",
        
        color: "#EEF7ED",
        textColor: "#0075F1",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",
        
        newTab: true
    },

    {
        title: "EduND - Tạo đề kiểm tra (V1)",
        description: "Trang tạo bài kiểm tra bằng cách tải lên file đề và chỉnh sửa.",
        url: "/ndlabs/edu/creator/v1",
        image: "https://ndsite.web.app/assets/images/logo.png",
        
        color: "#EEF7ED",
        textColor: "#0075F1",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",
        
        newTab: true
    },

    {
        title: "Kho đề Github - EduND",
        description: "Kho đề kiểm tra do ND Labs cung cấp cho người dùng EduND.",
        url: "https://github.com/nd-site/ndlabs/tree/main/edu/exam",
        image: "https://ndsite.web.app/assets/images/logo.png",
        color: "#FFEAF1",
        textColor: "#F00000",
        mutedColor: "#668096",
        iconColor: "#F00000",
        iconTextColor: "#FFFFFF",
        newTab: true
    },

    {
        title: "Quản lý quỹ lớp 11A4 (26-27)",
        description: "Trang quản lí quỹ lớp của lớp 11A4 năm học 2026-2027 (THPT Lộc An)",
        url: "/ndlabs/tool/quan-li-quy-lop-11a4-2627",
        image: "https://ndsite.web.app/assets/images/avatar.png",
        color: "#FFF0E3",
        textcolor: "#FF0000",
        mutedcolor: "#FF0000",
        newtab: false
    },
    {
        title: "Chép chính tả",
        description: "Chép chính tả theo tốc độ viết.",
        url: "/ndlabs/tool/chepchinhta/v1",
        image: "https://ndsite.web.app/assets/images/avatar.png",
        color: "#FFEAEA",
        textColor: "#FF4A4A",
        mutedColor: "#668096",
        iconColor: "#FF0000",
        iconTextColor: "#FFFFFF",
        newTab: true
    },
    {
        title: "Hóa Học 11 KNTT - Bài 1, 2",
        description: "Tổng hợp kiến thức Hóa Học lớp 11 sách Kết Nối Tri Thức bài 1 và bài 2 | ND Labs",
        url: "/ndlabs/edu/hoahoc/11/kien-thuc-bai-1-2",
        image: "https://ndsite.web.app/assets/images/avatar.png",
        color: "#EAEFFF",
        textColor: "#007BFF",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",
        newTab: true
    },
    {
        title: "Sổ Tay Tương Tác Hóa Học 11 KNTT",
        description: "Sổ tay ghi chép các kiến thức liên quan tới môn Hóa Học lớp 11 sách Kết Nối Tri Thức | ND Labs",
        url: "/ndlabs/edu/hoahoc/11/so-tay-tuong-tac",
        image: "https://ndsite.web.app/assets/images/avatar.png",
        color: "#EAEFFF",
        textColor: "#007BFF",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",
        newTab: true
    },
    {
        title: "GDQP-AN 11 KNTT - Bài 1, 2",
        description: "Tổng hợp kiến thức GDQP-AN lớp 11 sách Kết Nối Tri Thức bài 1 và bài 2 | ND Labs",
        url: "/ndlabs/edu/gdqp/11/kien-thuc-b1-b2",
        image: "https://ndsite.web.app/assets/images/avatar.png",
        color: "#EAEFFF",
        textColor: "#007BFF",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",
        newTab: true
    },
];
