
I. Các thư viện sử dụng
    1. axios(xử lí chuỗi JSON tự động, trong việc call api)
    2. cutomize-cra(một công cụ cho phép tùy chỉnh cấu hình của ứng dụng React mà không cần eject (tách ra) từ dự án gốc)
    3. Babel plugin để biên dịch mã JavaScript từ một phiên bản sang một phiên bản khác, giúp tương thích với các trình duyệt và môi trường khác nhau.
    4. Cài sass
    5. Cài font awesome

PHẦN 1: HEADER

    * LEFT: lOGO
        - Chèn logo dạng svg
        - Linh logo cho trang chủ
        - Thay thế logo trên thẻ title browser

    * CENTER: SEARCH
        - focus vào thẻ input mới hiện border
        - nhập text vào sẽ:
            + icon xoay vòng
            + kính hiển vi đổi màu trắng sang xám
            + hiển thị icon "x" có thể xóa text
            + hiển thị kết quả tìm kiếm phía dưới
            + ko cho phép nhập kí tự đầu tiên là space trong input search
        - call api
            + gửi request đi với nội dung text cuối cùng
            + click vào tìm kiếm sẽ chuyển sang route "/profile"
            + xóa text, bấm ngoài kết quả tìm kiếm sẽ tạm thời mất kq tìm kiếm
            + 
            
    * RIGHT: SUBMENU
        - submenu:
            + Hình ảnh mặc định, thay thế lúc hình ảnh chính bị mất link
            + hover để hiển thị submenu
            + chèn icon
            + tạo component chon cho "english", select ngôn ngữ
            + tạo border trên bằng thư viện
            + tạo thanh cuộn trong submenu "english"
        
Fix Bug
    - Lỗi trong quá trình import thư viện Tippy
    - Tối ưu thư mục và code
Validate: bằng thư viện props type

PHẦN 2: SITEBAR

   