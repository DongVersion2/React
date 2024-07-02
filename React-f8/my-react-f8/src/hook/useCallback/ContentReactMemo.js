import { memo, useCallback } from "react";
import App from "../../App";

const ContentMemo = ({onIncrease}) => {
    console.log('re-render')
    return(
        <>
            <h1>David Đông</h1>
            <button onClick={onIncrease}>Click me</button>
        </>
    )
}

export default memo(ContentMemo)

//memo nó sẽ check xem props nào thay đổi hay không
//nếu ko thay đổi thì k chạy
//bản chất memo sử dụng toán tử ===
//sử dụng memo khi component có truyền vào nhiều props

//mỗi khi tạo 1 hàm mới,nó sẽ lưu vào bộ nhớ và nó sẽ tạo 1 tham chiếu mới

// 2. useCallback nhận 2 đối số, hoạt đông tương tự effect
// - khi App được mouted thì useCallback sẽ được gọi đến
// - sau đó useCallback sẽ nhận đc hàm callback của nó
// - sau đó nó tạo tham chiếu, rồi lưu ra ngoài App
// - sau đó return lại tham chiếu cho biến được gán
// - biến đó đc gửi đến props của return
// - giá trị đó là giá trị đc tham chiếu ở lần mouted
// - cho nên nó k bị thay đổi

// lưu ý : để sử dụng useCallback cần phải sử dụng memo ở function component con



