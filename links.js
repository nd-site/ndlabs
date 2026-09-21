/*
 * ND Labs
 * ==============================
 * FILE QUẢN LÝ CÁC LIÊN KẾT
 *
 * Mỗi phần tử có thể gồm:
 *
 * title       : Tên ô
 * description : Nội dung mô tả
 * url         : Link khi bấm vào
 * image       : URL ảnh (không bắt buộc)
 * icon        : Chữ/icon nếu không dùng ảnh
 * color       : Màu nền của ô
 * textColor   : Màu tiêu đề
 * mutedColor  : Màu mô tả
 * newTab      : true = mở tab mới
 *               false = mở ngay trong tab hiện tại
 *
 * Có thể thêm bao nhiêu link tùy ý.
 */

const ndLinks = [

    {
        title: "ND Labs",
        description: "Trang web chính thức của ND Labs.",
        url: "https://ndsite.web.app/",
        image: "https://ndsite.web.app/assets/images/logo.png",
        color: "#eaf5ff",
        textColor: "#0068d9",
        mutedColor: "#58758e",
        newTab: true
    },

    {
        title: "EduSpace",
        description: "Hệ sinh thái giáo dục số dành cho học sinh Việt Nam.",
        url: "https://ndsite.web.app/eduspace",
        image: "https://ndsite.web.app/assets/images/logo.png",
        color: "#e8f4ff",
        textColor: "#0075f1",
        mutedColor: "#5c7890",
        newTab: true
    },

    {
        title: "GitHub",
        description: "Kho mã nguồn và các dự án của ND Labs.",
        url: "https://github.com/nd-site",
        icon: "GH",
        color: "#eef7ff",
        textColor: "#12304a",
        mutedColor: "#668096",
        newTab: true
    },

    {
        title: "Text to Image (V1)",
        description: "Chuyển đổi hình ảnh thành văn bản.",
        url: "/ndlabs/tti/v1",
        image: "https://ndsite.web.app/assets/images/logo.png",
        color: "#f0f9ff",
        textColor: "#0284c7",
        mutedColor: "#58758e",
        newTab: true
    },

    {
        title: "Text to Image (V2)",
        description: "Chuyển đổi hình ảnh thành văn bản.",
        url: "/ndlabs/tti/v2",
        image: "https://ndsite.web.app/assets/images/logo.png",
        color: "#f0f9ff",
        textColor: "#0284c7",
        mutedColor: "#58758e",
        newTab: true
    }
];
