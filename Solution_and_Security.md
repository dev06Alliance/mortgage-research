# Mortgage Broker Application Form

Tài liệu này mô tả các field chính trong luồng nhập hồ sơ vay của nền tảng Mortgage Broker.  
Mục tiêu là giúp người đọc hiểu mỗi field dùng để làm gì, ảnh hưởng thế nào đến Application và field nào có thể là điều kiện để đi tiếp.

> Lưu ý: Không ghi nhận giá trị đang hiển thị trên màn hình vì có thể là dữ liệu test.

---

# 1. Step: Solution

## 1.1. Màn hình: Confirm loan features

### Mục đích

Step **Solution** là bước đầu tiên trong Application.  
Mục tiêu của bước này là thu thập các thông tin cơ bản về khoản vay để hệ thống có thể chọn ra **Solution** phù hợp cho khách hàng.

Step này trả lời các câu hỏi chính:

- Khách hàng muốn vay bao nhiêu?
- Tài sản bảo đảm có giá trị bao nhiêu?
- Tỷ lệ vay trên giá trị tài sản là bao nhiêu?
- Mục đích vay là gì?
- Khách hàng muốn loại lãi suất và hình thức trả nợ nào?
- Có yêu cầu tính năng đặc biệt nào cho khoản vay không?
- Broker muốn đi theo luồng **Quick Conditional** hay **Full Application**?

---

## 1.2. Vai trò của Step Solution trong luồng Application

| Nội dung | Mô tả |
|---|---|
| Vị trí trong luồng | Bước đầu tiên của Application |
| Tên màn hình | Confirm loan features |
| Vai trò chính | Xác nhận thông tin khoản vay và chọn Solution phù hợp |
| Kết quả mong muốn | Hệ thống chọn được Solution để hồ sơ đi tiếp |
| Bước sau | Security - Details of the property |

---

## 1.3. Danh sách field trong Step Solution

| Field / Keyword | Loại field | Ý nghĩa nghiệp vụ | Ảnh hưởng đến Application | Ghi chú |
|---|---|---|---|---|
| Security document | Upload / Dropdown | Tài liệu liên quan đến tài sản bảo đảm. | Nếu upload tài liệu, hệ thống hoặc broker có thể lấy thông tin từ tài liệu thay vì nhập tay. | Có thể chọn nhập thủ công nếu không upload. |
| Enter details manually | Dropdown option | Chọn nhập thông tin bằng tay. | Broker phải tự nhập các thông tin liên quan đến khoản vay và tài sản. | Dùng khi không có tài liệu upload. |
| Search address | Text / Address search | Địa chỉ tài sản bảo đảm. | Dùng để kiểm tra khu vực lender có hỗ trợ cho vay hay không. | Có thể liên quan đến suburb, state, postcode. |
| TBA | Checkbox | Viết tắt của “To Be Advised”, nghĩa là tài sản chưa xác định đầy đủ. | Nếu property là TBA, hệ thống cần tối thiểu suburb, state và postcode để kiểm tra khu vực. | Thường dùng khi chưa có địa chỉ chính xác. |
| Suburb | Text | Khu vực / vùng ngoại ô của tài sản. | Ảnh hưởng đến việc kiểm tra lender có cho vay ở khu vực đó không. | Bắt buộc nếu property là TBA. |
| State | Text / Select | Bang nơi tài sản tọa lạc. | Một số policy cho vay có thể khác nhau theo từng bang. | Bắt buộc nếu property là TBA. |
| Postcode | Text | Mã bưu chính của tài sản. | Dùng để kiểm tra vùng rủi ro hoặc vùng lender không hỗ trợ. | Bắt buộc nếu property là TBA. |
| Loan amount | Currency input | Số tiền khách hàng muốn vay. | Là dữ liệu chính để tính LVR và kiểm tra hạn mức vay. | Field quan trọng, thường bắt buộc. |
| Max loan amount | System note | Số tiền vay tối đa hệ thống hoặc lender cho phép. | Nếu Loan amount vượt mức này, hồ sơ có thể không hợp lệ. | Do hệ thống tính hoặc policy quy định. |
| Estimated value of Property | Currency input | Giá trị ước tính của tài sản bảo đảm. | Dùng để tính LVR và đánh giá mức độ an toàn của khoản vay. | Có thể được thay thế bởi valuation chính thức ở bước sau. |
| LVR | Percentage input / Calculated field | Loan to Value Ratio, tỷ lệ khoản vay trên giá trị tài sản. | Là chỉ số quan trọng để kiểm tra rủi ro khoản vay. | Công thức thường là Loan amount / Property value. |
| Max LVR | System note | Tỷ lệ LVR tối đa lender cho phép. | Nếu LVR vượt Max LVR, Solution có thể không hợp lệ. | Policy phụ thuộc lender / product. |
| Primary loan purpose | Dropdown | Mục đích chính của khoản vay. | Ảnh hưởng đến loại product, policy, pricing và yêu cầu hồ sơ. | Ví dụ: Purchase Investment. |
| Purchase Investment | Dropdown value | Vay để mua bất động sản đầu tư. | Lender sẽ áp dụng policy dành cho investment loan. | Không phải owner occupied loan. |
| Loan term | Number input | Thời hạn vay, thường tính bằng năm. | Ảnh hưởng đến repayment, serviceability và tổng chi phí vay. | Thường là field bắt buộc. |
| Rate type | Dropdown | Loại lãi suất của khoản vay. | Dùng để lọc Solution phù hợp. | Ví dụ: Variable hoặc Fixed. |
| Variable | Dropdown value | Lãi suất biến động. | Repayment có thể thay đổi theo lãi suất thị trường hoặc lender. | Cần giải thích rõ cho client. |
| Repayment type | Dropdown | Hình thức trả nợ. | Ảnh hưởng đến cash flow và serviceability. | Ví dụ: Principal & Interest. |
| Principal & Interest | Dropdown value | Trả cả gốc và lãi. | Dư nợ giảm dần theo thời gian, thường được lender đánh giá ổn định hơn. | Khác với Interest Only. |
| Loan features | Button group / Multi select | Các tính năng mong muốn của khoản vay. | Dùng để lọc các Solution phù hợp với nhu cầu client. | Có thể chọn nhiều tính năng. |
| Offset | Loan feature | Tài khoản offset liên kết khoản vay. | Có thể giúp giảm tiền lãi phải trả nếu client có tiền trong offset account. | Tính năng phổ biến trong mortgage. |
| Commercial | Loan feature | Gắn với đặc điểm vay hoặc tài sản thương mại. | Có thể làm hồ sơ đi theo policy commercial thay vì residential. | Cần kiểm tra lại nếu tài sản là commercial. |
| NDIS | Loan feature | Liên quan đến tài sản hoặc thu nhập có yếu tố NDIS. | Có thể yêu cầu lender có policy riêng hỗ trợ loại hồ sơ này. | NDIS thường có yêu cầu đánh giá riêng. |
| No clawback | Loan feature | Điều kiện không clawback. | Thường liên quan đến commission hoặc điều kiện sản phẩm, không trực tiếp là thông tin tài chính của client. | Chủ yếu liên quan đến broker / product. |
| SMSF accountant declaration | Loan feature | Xác nhận hoặc declaration từ accountant cho hồ sơ SMSF. | Có thể là điều kiện quan trọng trong SMSF loan. | Thường cần khi vay qua SMSF. |
| Select available Solutions here | Button | Yêu cầu hệ thống tìm các Solution khả dụng. | Sau khi nhập đủ thông tin, broker bấm để hệ thống trả về danh sách Solution. | Không nên bấm khi thiếu field chính. |
| Selected solution | Result / Confirmation | Solution đang được chọn để đi tiếp. | Solution này quyết định policy, rate và yêu cầu hồ sơ ở các bước sau. | Cần kiểm tra đúng trước khi proceed. |
| Ezy SMSF | Solution name | Tên Solution / product được chọn. | Cho biết hồ sơ đang đi theo product SMSF cụ thể. | Tên có thể thay đổi theo product. |
| Rate | Number input / Display | Lãi suất của Solution đã chọn. | Ảnh hưởng đến repayment và serviceability. | Cần khớp với product đang chọn. |
| Reset | Button | Xóa hoặc đặt lại Solution đã chọn. | Cho phép broker chọn lại nếu thông tin hoặc Solution chưa đúng. | Dùng khi cần sửa lựa chọn. |
| Quick Conditional | Option | Luồng lấy conditional approval nhanh. | Hệ thống chỉ cần thông tin tối thiểu để kiểm tra sơ bộ. | Vẫn cần bổ sung thông tin để formal approval. |
| Full Application | Option | Luồng nhập đầy đủ hồ sơ. | Broker phải hoàn thiện nhiều thông tin hơn để đi tới xét duyệt đầy đủ. | Phù hợp khi muốn submit hồ sơ hoàn chỉnh. |
| Conditional | Status / Note | Chấp thuận có điều kiện. | Không phải approval cuối cùng; vẫn cần đáp ứng điều kiện và cung cấp tài liệu. | Dùng cho đánh giá sơ bộ. |
| Serviceability | Business concept | Khả năng trả nợ của borrower / SMSF. | Là yếu tố chính để lender đánh giá hồ sơ có đủ khả năng vay không. | Bị ảnh hưởng bởi income, debts, rent, repayment. |
| Formal approval | Status | Phê duyệt chính thức. | Chỉ đạt được khi hồ sơ đầy đủ và đáp ứng policy. | Sau conditional approval nếu đủ điều kiện. |
| Broker loan summary notes | Textarea | Ghi chú nội bộ của broker về khoản vay. | Giúp lưu lại bối cảnh, lưu ý xử lý hoặc thông tin cần review sau. | Không nên nhập thông tin mơ hồ hoặc sai lệch. |
| Save for later | Button | Lưu hồ sơ để xử lý sau. | Dữ liệu được giữ lại nhưng Application chưa đi tiếp. | Dùng khi chưa đủ thông tin. |
| Proceed | Button | Tiếp tục sang bước tiếp theo. | Chỉ nên bấm khi thông tin Solution đã đủ và chính xác. | Có thể bị khóa nếu thiếu field bắt buộc. |

---

## 1.4. Field có khả năng bắt buộc trong Step Solution

| Nhóm thông tin | Field có thể bắt buộc | Lý do |
|---|---|---|
| Thông tin tài sản | Search address hoặc Suburb / State / Postcode nếu TBA | Hệ thống cần kiểm tra lender có cho vay ở khu vực đó không. |
| Thông tin khoản vay | Loan amount | Cần để tính hạn mức vay và LVR. |
| Giá trị tài sản | Estimated value of Property | Cần để tính LVR. |
| Tỷ lệ vay | LVR | Dùng để kiểm tra có vượt Max LVR không. |
| Mục đích vay | Primary loan purpose | Dùng để chọn đúng policy và product. |
| Thời hạn vay | Loan term | Dùng để tính repayment và serviceability. |
| Loại lãi suất | Rate type | Dùng để lọc Solution phù hợp. |
| Hình thức trả nợ | Repayment type | Ảnh hưởng đến repayment và serviceability. |
| Solution | Selected solution | Phải có Solution hợp lệ trước khi đi tiếp. |
| Luồng xử lý | Quick Conditional hoặc Full Application | Hệ thống cần biết broker muốn đi theo hướng nào. |

---

# 2. Step: Security

## 2.1. Màn hình: Details of the property

### Mục đích

Step **Security** dùng để thu thập thông tin chi tiết về tài sản bảo đảm cho khoản vay.

Trong mortgage, **Security** thường là bất động sản mà lender dùng làm tài sản bảo đảm. Nếu borrower không trả được nợ, lender có quyền xử lý tài sản này theo điều kiện hợp đồng vay.

Step này trả lời các câu hỏi chính:

- Tài sản bảo đảm nằm ở đâu?
- Lender có cho vay tại khu vực đó không?
- Tài sản thuộc loại nào?
- Tài sản đã có hợp đồng mua bán chưa?
- Giá mua và chi phí mua tài sản là bao nhiêu?
- Có tiền thuê dự kiến không?
- Có cần valuation hoặc pre-valuation không?
- Tổng số tiền cần có để hoàn tất giao dịch là bao nhiêu?

---

## 2.2. Vai trò của Step Security trong luồng Application

| Nội dung | Mô tả |
|---|---|
| Vị trí trong luồng | Sau Step Solution |
| Tên màn hình | Details of the property |
| Vai trò chính | Nhập chi tiết tài sản bảo đảm |
| Kết quả mong muốn | Xác định tài sản có phù hợp để dùng làm security hay không |
| Bước sau | Who’s on the loan - SMSF details |

---

## 2.3. Danh sách field trong Step Security

| Field / Keyword | Loại field | Ý nghĩa nghiệp vụ | Ảnh hưởng đến Application | Ghi chú |
|---|---|---|---|---|
| Details of the property | Page title | Màn hình nhập chi tiết tài sản bảo đảm. | Là cơ sở để lender đánh giá tài sản có đủ điều kiện làm security không. | Thuộc Step Security. |
| Full Application | Status / Message | Cho biết hồ sơ đang đi theo luồng nhập đầy đủ thông tin. | Broker cần hoàn thiện nhiều field hơn so với Quick Conditional. | Xuất hiện sau khi chọn Full Application. |
| Property details | Section title | Nhóm thông tin chính về tài sản. | Dữ liệu này dùng cho kiểm tra khu vực, chi phí, valuation và credit decision. | Nhóm field chính của màn hình. |
| Quick check | System process | Kiểm tra nhanh xem lender có thể cho vay với tài sản/khu vực này không. | Nếu không đạt, Application có thể bị chặn hoặc cần đổi Solution. | Dựa nhiều vào địa chỉ và postcode. |
| Evidence of rental income | Upload / Dropdown | Tài liệu chứng minh thu nhập cho thuê của tài sản. | Có thể ảnh hưởng đến serviceability, đặc biệt với investment property hoặc SMSF loan. | Có thể upload hoặc nhập tay. |
| Enter details manually | Dropdown option | Broker chọn nhập thông tin thủ công. | Broker phải tự nhập các thông tin property thay vì hệ thống đọc từ tài liệu. | Dùng khi không upload tài liệu. |
| Search address | Text / Address search | Địa chỉ tài sản bảo đảm. | Dùng để kiểm tra khu vực cho vay và xác định thông tin tài sản. | Field rất quan trọng. |
| TBA | Checkbox | Tài sản chưa xác định địa chỉ đầy đủ. | Nếu TBA, cần nhập suburb, state và postcode để kiểm tra khu vực. | TBA = To Be Advised. |
| Suburb | Text | Khu vực / vùng ngoại ô nơi tài sản tọa lạc. | Ảnh hưởng đến policy theo khu vực. | Cần nếu TBA. |
| State | Text / Select | Bang nơi tài sản tọa lạc. | Policy có thể khác nhau theo từng bang. | Cần nếu TBA. |
| Postcode | Text | Mã bưu chính của tài sản. | Dùng để kiểm tra vùng rủi ro hoặc khu vực lender không hỗ trợ. | Cần nếu TBA. |
| We lend in this area! | System result | Hệ thống xác nhận lender có hỗ trợ cho vay ở khu vực này. | Đây là tín hiệu cho thấy hồ sơ có thể tiếp tục với tài sản này. | Nếu không có xác nhận này, cần kiểm tra lại. |
| Property is commercial | Checkbox | Đánh dấu nếu tài sản là tài sản thương mại. | Có thể làm hồ sơ áp dụng policy commercial thay vì residential. | Ảnh hưởng đến LVR, valuation và product. |
| Unit / Lot no. | Text input | Số căn, số lô hoặc mã đơn vị của tài sản. | Giúp xác định chính xác tài sản, nhất là unit, apartment, townhouse hoặc dự án. | Optional nếu không áp dụng. |
| Street name | Text input | Tên đường của tài sản. | Hỗ trợ xác minh địa chỉ chính xác. | Có thể đã được lấy từ Search address. |
| Development name | Text input | Tên dự án nếu tài sản thuộc một development/project. | Quan trọng với off the plan, apartment hoặc khu phức hợp. | Optional nếu không có dự án. |
| Signed contract | Yes / No | Xác định đã có hợp đồng mua bán đã ký hay chưa. | Nếu có signed contract, lender có thể yêu cầu đối chiếu giá mua, settlement date và điều kiện hợp đồng. | Field quan trọng cho purchase case. |
| Anticipated finance date | Date input | Ngày dự kiến cần hoàn tất điều kiện finance. | Ảnh hưởng đến timeline xử lý hồ sơ và deadline approval. | Cần để broker quản lý thời hạn. |
| Anticipated settlement date | Date input | Ngày dự kiến settlement, tức ngày hoàn tất giao dịch mua bán. | Là mốc quan trọng cho valuation, approval, document và giải ngân. | Field quan trọng cho purchase case. |
| Property purchase price | Currency input | Giá mua tài sản. | Dùng để tính tổng vốn cần có, stamp duty và có thể ảnh hưởng đến LVR. | Thường là field bắt buộc. |
| Estimated weekly rent | Currency input | Tiền thuê dự kiến mỗi tuần. | Có thể được dùng để đánh giá income và serviceability. | Cần kiểm tra nếu hệ thống tự ước tính. |
| Please edit as required | System note | Nhắc broker kiểm tra và chỉnh tiền thuê nếu cần. | Nếu rent sai, serviceability có thể bị tính sai. | Không phải field nhập liệu. |
| Estimated setup costs | Currency input | Chi phí thiết lập hồ sơ/khoản vay/tài sản. | Góp phần vào tổng số tiền client/SMSF cần chuẩn bị. | Có thể chưa bao gồm một số phí. |
| Lender Risk Fees | System note | Phí rủi ro của lender nếu áp dụng. | Nếu không tính đúng, tổng chi phí thực tế có thể bị thiếu. | Tùy policy/product. |
| Estimated stamp duty & government fees | Currency input | Thuế trước bạ và phí chính phủ khi mua tài sản. | Là khoản chi phí lớn, ảnh hưởng đến tổng funds required. | Cần tính theo state và property type. |
| Estimated total funds required | Calculated / Currency input | Tổng số tiền ước tính cần có để hoàn tất giao dịch. | Giúp đánh giá client/SMSF có đủ tiền để settlement không. | Bao gồm giá mua và các chi phí liên quan. |
| Estimated value of property | Currency input | Giá trị ước tính của tài sản. | Ảnh hưởng đến LVR và valuation. | Có thể lấy từ nguồn tham khảo như CoreLogic. |
| CoreLogic data | Data source note | Nguồn dữ liệu tham khảo để ước tính giá trị tài sản. | Chỉ là tham khảo; lender vẫn có thể yêu cầu valuation chính thức. | Không nên xem là valuation cuối cùng. |
| Type of property | Button group / Select | Loại tài sản bảo đảm. | Ảnh hưởng đến policy, valuation, LVR và khả năng lender chấp nhận. | Field quan trọng. |
| Duplex | Property type | Tài sản dạng hai căn hoặc hai đơn vị nhà ở. | Có thể có policy khác với house thông thường. | Cần kiểm tra title/structure nếu cần. |
| House | Property type | Nhà ở riêng lẻ. | Thường là loại tài sản phổ biến và dễ đánh giá. | Residential property. |
| Townhouse | Property type | Nhà phố / nhà liền kề. | Có thể cần xem strata/body corporate tùy trường hợp. | Policy có thể khác house. |
| Off the plan | Property type | Tài sản mua khi chưa hoàn thành xây dựng. | Rủi ro cao hơn, ảnh hưởng valuation, settlement timing và policy. | Cần kiểm tra kỹ với lender. |
| Commercial | Property type | Tài sản thương mại. | Có thể áp dụng commercial policy, LVR và pricing khác. | Cần đồng bộ với checkbox Property is commercial. |
| Unit/Apartment | Property type | Căn hộ hoặc unit. | Có thể cần kiểm tra diện tích, building type, strata và postcode policy. | Policy có thể nghiêm hơn house. |
| Pre-Valuation | Yes / No | Kiểm tra đã có định giá sơ bộ chưa. | Nếu có, broker/lender có thể dùng để tham khảo trước valuation chính thức. | Không thay thế valuation chính thức. |
| Property contact details | Text input | Thông tin liên hệ liên quan đến tài sản. | Dùng để sắp xếp inspection hoặc valuation nếu cần. | Có thể là agent/vendor/contact person. |
| Broker loan summary notes | Textarea | Ghi chú nội bộ của broker về tài sản hoặc hồ sơ. | Giúp lưu lại các điểm cần chú ý khi review hoặc submit. | Không nên nhập thông tin không xác thực. |
| Save for later | Button | Lưu thông tin để xử lý sau. | Application chưa đi tiếp nhưng dữ liệu được giữ lại. | Dùng khi thiếu thông tin. |
| Next | Button | Chuyển sang bước kế tiếp. | Chỉ nên bấm khi thông tin property đã đủ và hợp lý. | Có thể bị khóa nếu thiếu field bắt buộc. |

---

## 2.4. Field có khả năng bắt buộc trong Step Security

| Nhóm thông tin | Field có thể bắt buộc | Lý do |
|---|---|---|
| Địa chỉ tài sản | Search address hoặc Suburb / State / Postcode nếu TBA | Hệ thống cần biết tài sản ở đâu để kiểm tra lender có cho vay tại khu vực đó không. |
| Kiểm tra khu vực | We lend in this area! | Nếu khu vực không được hỗ trợ, hồ sơ có thể không thể tiếp tục. |
| Tình trạng hợp đồng | Signed contract | Ảnh hưởng đến timeline, tài liệu cần có và độ chắc chắn của giao dịch. |
| Ngày quan trọng | Anticipated finance date, Anticipated settlement date | Dùng để quản lý deadline xử lý hồ sơ. |
| Giá mua | Property purchase price | Cần để tính tổng tiền cần chuẩn bị và kiểm tra khoản vay. |
| Chi phí mua tài sản | Stamp duty, government fees, setup costs | Dùng để tính total funds required. |
| Loại tài sản | Type of property | Lender cần biết loại tài sản để áp dụng đúng policy. |
| Định giá | Estimated value of property, Pre-Valuation | Ảnh hưởng đến LVR và valuation. |
| Liên hệ tài sản | Property contact details | Có thể cần cho valuation hoặc inspection. |

---

# 3. Luồng xử lý tổng quan: Solution → Security

## 3.1. Step Solution

Step **Solution** xác định khoản vay đang cần loại sản phẩm nào.

Input chính gồm:

- Loan amount
- Estimated value of Property
- LVR
- Primary loan purpose
- Loan term
- Rate type
- Repayment type
- Loan features
- Selected solution
- Quick Conditional hoặc Full Application

Output chính của step này là:

- Một **Solution** được chọn
- Một hướng xử lý được xác định: **Quick Conditional** hoặc **Full Application**

---

## 3.2. Step Security

Step **Security** xác định tài sản dùng để bảo đảm cho khoản vay có phù hợp không.

Input chính gồm:

- Address hoặc Suburb / State / Postcode
- Property type
- Signed contract
- Anticipated finance date
- Anticipated settlement date
- Property purchase price
- Estimated weekly rent
- Estimated setup costs
- Stamp duty & government fees
- Estimated total funds required
- Estimated value of property
- Pre-Valuation
- Property contact details

Output chính của step này là:

- Xác nhận lender có hỗ trợ khu vực tài sản
- Xác định loại tài sản
- Xác định giá mua và chi phí liên quan
- Chuẩn bị dữ liệu cho valuation và credit decision

---

# 4. Tóm tắt ảnh hưởng đến Application

| Step | Câu hỏi nghiệp vụ chính | Ảnh hưởng đến Application |
|---|---|---|
| Solution | Khách hàng muốn vay theo cấu trúc nào? | Giúp hệ thống chọn đúng product, rate, repayment type và loan features. |
| Security | Tài sản bảo đảm có phù hợp không? | Giúp lender đánh giá khu vực, loại tài sản, giá trị, chi phí và rủi ro của security. |

---

# 5. Ghi chú cho người đọc non-tech

- **Solution** không chỉ là “chọn sản phẩm vay”, mà là bước xác định cấu trúc khoản vay phù hợp với nhu cầu của client.
- **Security** không phải là bảo mật hệ thống, mà trong mortgage nghĩa là tài sản bảo đảm cho khoản vay.
- **LVR** là một chỉ số quan trọng, cho biết khoản vay chiếm bao nhiêu phần trăm so với giá trị tài sản.
- **Serviceability** là khả năng trả nợ của client hoặc SMSF.
- **Valuation** là bước lender xác nhận giá trị tài sản, không nên chỉ dựa vào giá trị ước tính ban đầu.
- **Full Application** yêu cầu nhập đầy đủ thông tin hơn **Quick Conditional**.
