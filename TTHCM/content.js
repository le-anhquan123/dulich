// dữ liệu chứa các câu hỏi và câu trả lời
const data = [
    //chương 1
    { question: 'Nhà nước xã hội chủ nghĩa đầu tiên trên thế giới ra đời ở:', answer: 'Liên Xô cũ' },
    { question: 'Nhà nước xã hội chủ nghĩa Việt Nam ra đời sau:', answer: 'Cách mạng tháng 8/1945' },
    { question: 'Bản chất của nhà nước Cộng hoà XHCN Việt Nam:', answer: 'Là nhà nước dân chủ, của dân, do dân và vì dân' },
    { question: 'Hiến pháp là văn bản pháp lý có đặc điểm nào sau đây?', answer: 'Tất cả đều đúng' },
    { question: 'Hiến pháp là văn bản pháp lý có đặc điểm nào sau đây?', answer: 'Có hiệu lực cao nhất trong hệ thống văn bản quy phạm pháp luật' },
    { question: 'Đặt dưới sự lãnh đạo của Đảng cộng sản Việt Nam, là một nguyên tắc hoạt động của:', answer: 'Bộ máy nhà nước xã hội chủ nghĩa Việt Nam' },
    { question: 'Nguyên thủ quốc gia của nước CHXHCN Việt Nam là:', answer: 'Chủ tịch nước' },
    { question: 'Đặt ra thuế và thu thuế là:', answer: 'Một trong những đặc trưng cơ bản của Nhà nước' },
    { question: 'Đặt ra pháp luật và buộc mọi thành viên trong xã hội phải thực hiện, đó là đặc trưng của:', answer: 'Mọi nhà nước' },
    { question: 'Với tư cách là cơ quan quyền lực nhà nước cao nhất, Quốc hội thực hiện chức năng', answer: 'Chức năng lập pháp' },
    { question: 'Nhà nước không tồn tại trong xã hội nào sau đây?', answer: 'Xã hội Cộng hoà nguyên thuỷ' },
    { question: 'Theo quan điểm của chủ nghĩa Mác – Lênin, nguyên nhân chủ yếu làm xuất hiện Nhà nước là:', answer: 'Do xã hội có sự phân chia giai cấp và đấu tranh giai cấp' },
    { question: 'Bản chất giai cấp của Nhà nước thể hiện:', answer: 'Nhà nước là một bộ máy trấn áp đặc biệt của giai cấp này đối với giai cấp khác' },
    { question: 'Bản chất xã hội của Nhà nước thể hiện:', answer: 'Nhà nước là bộ máy nhằm bảo đảm trật tự an toàn xã hội và đảm đương các công việc chung vì sự phát triển của xã hội' },
    { question: 'Dấu hiệu nào sau đây không phải là đặc trưng cơ bản của Nhà nước?', answer: 'Nhà nước điều chỉnh xã hội bằng các tập quán và đạo đức xã hội' },
    { question: 'Chức năng chính của Nhà nước gồm các loại chức năng sau:', answer: 'Các chức năng đối nội và các chức năng đối ngoại' },
    { question: 'Hình thức chính thể của Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam hiện nay là:', answer: 'Cộng hòa dân chủ' },
    { question: 'Kiểu Nhà nước đầu tiên trong lịch sử là:', answer: 'Nhà nước Chiếm hữu nô lệ' },
    { question: 'Chủ tịch nước của nước Cộng Hoà xã hội chủ nghĩa Việt Nam theo Hiến pháp 2013 có quyền:', answer: 'Thay mặt Nhà nước để quyết định mọi vấn đề đối nội và đối ngoại' },
    { question: 'Hội đồng nhân dân các cấp là:', answer: 'Cơ quan quyền lực Nhà nước ở địa phương' },
    { question: '"Quyền lực của nhà nước về bản chất giống quyền lực của người đứng đầu trong gia đình" là quan điểm của học thuyết nào?', answer: 'Thuyết gia trưởng' },
    { question: '"Nhà nước là sự ký kết hợp tác của mọi thành viên trong xã hội sống trong trạng thái tự nhiên của con người" là quan điểm của học thuyết nào?', answer: 'Thuyết khế ước' },
    { question: '"Nhà nước là sự phát triển của gia đình và quyền gia trưởng" là quan điểm của học thuyết nào?', answer: 'Thuyết gia trưởng' },
    { question: 'Hội đồng nhân dân chịu trách nhiệm trước:', answer: 'Cơ quan quyền lực cấp trên và nhân dân địa phương' },
    { question: 'Ủy ban nhân dân chịu trách nhiệm trước:', answer: 'Hội đồng nhân dân cùng cấp' },
    { question: 'Đảng cộng sản Việt Nam là một:', answer: 'Tổ chức chính trị' },
    { question: 'Cơ quan nào sau đây không được quyền ban hành nghị quyết?', answer: 'Bộ' },
    { question: 'Ủy ban nhân dân phường Trảng Dài do:', answer: 'Hội đồng Nhân dân phường Trảng Dài bầu ra' },
    { question: 'Hội đồng nhân dân huyện Định Quán chịu trách nhiệm trước:', answer: 'Cả a và b' },
    { question: 'Ủy ban nhân dân tỉnh Đồng Nai chịu trách nhiệm trước:', answer: 'Hội đồng nhân dân tỉnh Đồng Nai' },
    { question: 'Quyền lực công của Nhà nước khác với quyền lực công trong xã hội cộng sản nguyên thủy ở những điểm nào?', answer: 'Tất cả đều đúng' },
    { question: '"Nửa nhà nước" là khái niệm chỉ kiểu nhà nước nào?', answer: 'Xã hội chủ nghĩa' },
    { question: 'Theo quan điểm Mác - Lenin, nguồn gốc ra đời của nhà nước là?', answer: 'Do xuất hiện chế độ tư hữu và phân chia giai cấp, mâu thuẫn giai cấp' },
    { question: 'Nhà nước Việt Nam ra đời trên cơ sở nào?', answer: 'Là kết quả đấu tranh và thắng lợi của Cách mạng Tháng Tám năm 1945' },
    { question: 'Bản hiến pháp Hiện hành của Việt Nam là hiến pháp năm nào?', answer: '2013' },
    { question: 'Hiến pháp bên cạnh mang tính pháp lý còn thể hiện:', answer: 'Tính chính trị' },
    { question: 'Quốc hội chịu trách nhiệm trước:', answer: 'Nhân dân' },
    { question: 'Chức năng của chính phủ:', answer: 'Thống nhất quản lý các vấn đề thuộc mọi lĩnh vực đời sống xã hội' },
    { question: 'Ngân hàng nhà nước Việt Nam:', answer: 'Là cơ quan ngang bộ' },
    { question: 'Thanh tra chính phủ là:', answer: 'Là cơ quan ngang bộ' },
    { question: 'Theo quan điểm của chủ nghĩa Mác – Lenin, nhà nước sẽ bị mất đi ở xã hội nào?', answer: 'Cộng sản chủ nghĩa' },
    { question: 'Hiến pháp là văn bản pháp lý có đặc điểm nào sau đây?', answer: 'Có hiệu lực cao nhất trong hệ thống văn bản quy phạm pháp luật' },
    { question: 'Theo quan điểm của thuyết thần học, thì ai là người sinh ra nhà nước?', answer: 'Thần thánh' },
    { question: 'Theo quan điểm của chủ nghĩa Mác – Lenin, nguồn gốc trực tiếp làm cho nhà nước ra đời, đó là?', answer: 'Đấu tranh giai cấp' },
    { question: 'Theo quan điểm của thuyết bạo lực, nhà nước ra đời là do?', answer: 'Do kết quả của các cuộc chiến tranh' },
    { question: 'Con người đã trải qua những hình thức cộng đồng người nào?', answer: 'Thị tộc – bộ tộc – bộ lạc – dân tộc' },
    { question: 'Con người đã trải qua các hình thức gia đình nào', answer: 'Tất cả các đáp án trên' },
    { question: 'Trong các cộng đồng người ở các làng xã của Việt Nam thời phong kiến, người ta quản lý xã hội bằng biện pháp chính nào sau đây?', answer: 'Lệ làng' },
    { question: 'Học thuyết nào sau đây đề cao vai trò giáo dục đạo đức cá nhân, đặc biệt đối với người quân tử?', answer: 'Nho giáo' },
    { question: 'Ai là người có quyền lực cao nhất trong bộ máy chính quyền theo quan điểm của Nho giáo?', answer: 'Thiên Tử' },
    { question: 'Nguyên nhân sâu xa dẫn đến sự ra đời của Nhà nước theo quan điểm của Chủ nghĩa Mác – Lenin, đó là?', answer: 'Sự xuất hiện tư hữu' },
    { question: 'Theo quan điểm Nho giáo, xã hội tồn tại các mối quan hệ giường cột nào sau đây?Theo quan điểm Nho giáo, xã hội tồn tại các mối quan hệ giường cột nào sau đây?', answer: 'Vua tôi; cha con; vợ chồng; anh em; bạn bè' },
    { question: 'Nhà nước có những chức năng nào sau đây?', answer: 'Các đáp án trên đều đúng' },
    { question: 'Có bao nhiêu chế độ xã hội có sự tồn tại của nhà nước?', answer: '4' },
    { question: 'Nhận định nào sau đây là đúng nhất?', answer: 'Nhà nước ra đời nhằm mục đích trấn áp giai' },
    { question: 'Kiểu nhà nước là khái niệm dùng để chỉ?', answer: 'Giai cấp nào thống trị trong xã hội' },
    { question: 'Khái niệm “hình thức nhà nước” dùng để diễn tả những vấn đề nào sau đây?', answer: 'Tất cả các vấn đề trên' },
    { question: 'Bản chất của việc sử dụng các phương pháp cai trị xã hội như thế nào là nội hàm của khái niệm nào sau đây?', answer: 'Chế độ chính trị' },
    { question: 'Tam quyền phân lập là tư tưởng về?', answer: 'Tất cả các đáp án trên' },
    { question: 'Trong chế độ phong kiến, hình thức chỉnh thể nhà nước là?', answer: 'Hình thức chỉnh thể quân chủ tuyệt' },
    // Chương 2
    { question: 'Pháp luật xã hội chủ nghĩa là do:', answer: 'Do nhà nước xã hội chủ nghĩa ban hành' },
    { question: 'Pháp luật có vai trò quan trọng đối với kinh tế, thể hiện ở việc:', answer: 'Tất cả đều đúng' },
    { question: 'Pháp luật có vai trò đối với xã hội, bởi lẽ:', answer: 'Tất cả đều đúng' },
    { question: 'Pháp luật không tồn tại trong xã hội nào sau đây?', answer: 'Tất cả đều đúng' },
    { question: 'Văn bản quy phạm pháp luật là văn bản do:', answer: 'Cơ quan Nhà nước có thẩm quyền ban hành' },
    { question: 'Luật Giáo dục do cơ quan nào ban hành?', answer: 'Quốc hội' },
    { question: 'Xét ở khía cạnh trình độ, ý thức pháp luật được chia thành hai loại:', answer: 'ý thức pháp luật thông thường và ý thức pháp luật mang tính lý luận' },
    { question: 'Pháp luật Việt Nam chưa từng sử dụng hình thức pháp luật nào sau đây:', answer: 'Tiền lệ pháp' },
    { question: 'Chức năng của pháp luật:', answer: 'Tất cả đều đúng' },
    { question: 'Pháp luật được xem là?', answer: 'Những quy tắc ứng xử, xử sự chung của một quốc gia' },
    { question: 'Nguồn của Pháp luật có thể là:', answer: 'Tất cả đều đúng' },
    { question: 'Pháp luật thể hiện ý chí của giai cấp nào sau đây?', answer: 'Giai cấp thống trị ' },
    { question: 'Lực lượng nào sau đây sẽ đảm bảo Pháp luật được thực hiện?', answer: 'Nhà nước' },
    { question: 'Xét về mặt khách quan, Pháp luật ra đời là do?', answer: 'Chế độ tư hữu và đấu tranh giai cấp, cùng với sự ra đời của nhà nước' },
    { question: 'Về mặt chủ quan, Pháp luật là do?', answer: 'Nhà nước ban hành hoặc thừa nhận pháp luật' },
    { question: 'Tính cưỡng chế của Pháp luật khác với ý thức đạo đức, tôn giáo ở chỗ:', answer: 'Tất cả các đáp án trên' },
    { question: 'Pháp luật chỉ cách ứng xử mà mọi người phải tuân theo trong những trường hợp nhất định, là tính chất nào sau đây của Pháp luật?', answer: 'Tính phổ biến' },
    { question: 'Văn bản pháp luật cấp dưới không được trái với văn bản cấp trên, là tính chất nào sau đây của Pháp luật?', answer: 'Tính xác định chặt chẽ về hình thức' },
    { question: 'Pháp luật có những chức năng cơ bản nào sau đây?', answer: 'Tất cả đều đúng' },
    { question: 'Giữa pháp luật và kinh tế, thì:', answer: 'Kinh tế quyết định đến pháp luật ' },
    { question: 'Phương pháp điều chỉnh hành vi con người của Pháp luật và đạo đức, khác nhau ở chỗ:', answer: 'Pháp luật điều chỉnh bằng tính cưỡng chế, đạo đức bằng ý thức tự giác' },
    { question: 'Chế tài xét sử của Pháp luật và đạo đức khác nhau ở chỗ:', answer: 'Tất cả đều đúng' },
    { question: 'Để quản lý xã hội, thời kỳ phong kiến Trung Quốc đã sử dụng học thuyết nào sau đây là chủ yếu?', answer: 'Nho giáo' },
    { question: 'Đặc điểm chung trong việc quản lý xã hội của các học thuyết Nho giáo, Đạo giáo, Phật giáo lấy yếu tố nào làm nòng cốt?', answer: 'Nhân nghĩa' },
    { question: 'Vì sao nói "Đạo đức là pháp luật tối đa, pháp luật là đạo đức tối thiểu"?', answer: 'Tất cả đều đúng' },
    { question: 'Pháp luật không có ở chế độ nào sau đây?', answer: 'Cộng sản nguyên thủy' },
    { question: 'Bản chất của Pháp luật là?', answer: 'Biểu hiện ý chí của giai cấp thống trị' },
    { question: 'Chức năng nào KHÔNG phải là chức năng của pháp luật:', answer: 'Chức năng xây dựng và bảo vệ tổ quốc' },
    { question: 'Các thuộc tính của pháp luật là:', answer: 'Tính bắt buộc chung (hay tính quy phạm phổ biến); Tính xác định chặt chẽ về mặt hình thức' },
    { question: 'Theo quan điểm của chủ nghĩa Mác – Lênin, nhà nước và pháp luật là hai hiện tượng xã hội:', answer: 'Cùng phát sinh, phát triển, cùng tồn tại và tiêu vong.' },
    { question: 'Thuộc tính (đặc trưng) nào sau đây là của pháp luật:', answer: 'Tính xác định chặt chẽ về mặt hình thức; Tính bắt buộc chung (tính quy phạm phổ biến' },
    { question: 'Thuộc tính (đặc trưng) nào sau đây là của pháp luật:', answer: 'Tính được đảm bảo thực hiện bằng nhà nước; Tính bắt buộc chung (tính quy phạm phổ biến)' },
    { question: 'Thuộc tính (đặc trưng) nào sau đây là của pháp luật:', answer: 'Tính được đảm bảo thực hiện bằng nhà nước; Tính xác định chặt chẽ về mặt hình thức' },
    { question: 'Thuộc tính (đặc trưng) nào sau đây là của pháp luật:', answer: 'Tính xác định chặt chẽ về mặt hình thức' },
    { question: 'Tính xác định chặt chẽ về mặt hình thức', answer: 'Tính bắt buộc chung (tính quy phạm phổ biến)' },
    { question: 'Thuộc tính (đặc trưng) nào sau đây là của pháp luật:', answer: 'Tính được đảm bảo thực hiện bằng nhà nước' },
    { question: 'Chức năng nào sau đây là của Pháp luật', answer: 'Bảo vệ các quan hệ xã hội' },
    { question: 'Chức năng nào sau đây là của Pháp luật', answer: 'Giáo dục hành vi con người' },
    { question: 'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?', answer: 'Tính quy phạm phổ biến' },
    { question: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện', answer: 'Bằng quyền lực Nhà nước' },
    { question: 'Pháp luật không quy định về những việc nào dưới đây ?', answer: 'Nên làm' },
    { question: 'Một trong những đặc trưng của pháp luật thể hiện ở', answer: 'Tính quyền lực, bắt buộc chung' },
    { question: 'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?', answer: 'Pháp luật' },
    { question: 'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?', answer: 'Tính xác định chặt chẽ về mặt hình thức' },
    { question: 'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?', answer: 'Bản chất giai cấp' },
    { question: 'Pháp luật có tính quyền lực, bắt buộc chung, nghĩa là quy định bắt buộc đối với', answer: 'Mọi cá nhân tổ chức' },
    { question: 'Pháp luật phản ánh những nhu cầu, lợi ích của giai cấp, tầng lớp khác nhau trong xã hội là thể hiện bản chất nào dưới đây của pháp luật?', answer: 'Bản chất xã hội' },
    { question: 'Luật Hôn nhân và gia đình năm 2014 quy định nam, nữ khi kết hôn với nhau phải tuân theo điều kiện: “Việc kết hôn phải được đăng kí và do cơ quan nhà nước có thẩm quyền thực hiện”, là thể hiện đặc trưng nào dưới đây của pháp luật ?', answer: 'Tính quy phạm phổ biến' },
    { question: 'Khoản 2 Điều 69 Luật Hôn nhân và gia đình năm 2014 quy định về nghĩa vụ của cha mẹ: “Trông nom, nuôi dưỡng, chăm sóc, bảo vệ quyền và lợi ích hợp pháp của con chưa thành niên” là thể hiện mối quan hệ giữa pháp luật với', answer: 'Đạo đức' },
    { question: 'Pháp luật có vái trò như thế nào đối với công dân ?', answer: 'Bảo vệ quyền và lợi ích hợp pháp của công dân' },
    //chuong 3
    { question: 'Văn bản luật phạm vi có hiệu lực cao nhất, các văn bản khác luật phạm vi không được để lại với nó, đó chính là:', answer: 'Hiến pháp' },
    { question: 'Điểm nào sau đây không phải là điểm khác nhau giữa tập quán và tập quán pháp?', answer: 'Hiến pháp' },
    { question: 'Pháp lệnh do ai hoặc cơ quan nào ban hành?', answer: 'Ban thường vụ Quốc hội' },
    { question: 'Chỉ thị do ai hoặc cơ quan nào ban hành?', answer: 'Ban nhân dân' },
    { question: 'Hiến pháp 2013 có hiệu lực thi hành từ ngày nào?', answer: '01/01/2014' },
    { question: 'Khái niệm “Hình thức pháp luật” dùng để chỉ:', answer: 'Những dạng tồn tại thực tế của pháp luật' },
    { question: 'Hình thức pháp luật là hoạt động nào sau đây:', answer: 'Hợp pháp hóa trong các hoạt động làm luật và ban hành pháp luật' },
    { question: 'Trong hoạt động xét xử của tòa án, Tòa án sẽ sử dụng hình thức pháp luật chính nào sau đây?', answer: 'Văn bản quy phạm pháp luật' },
    { question: 'Cơ sở để hình thành các Công ước quốc tế là?', answer: 'Tất cả các quốc gia đều có mối quan hệ với nhau từ song phương tới đa phương' },
    { question: 'Tòa án chỉ sử dụng các công ước quốc tế khi:', answer: 'Quốc gia đó đã ký kết tuân thủ các Công ước trên phạm vi lãnh thổ của mình' },
    { question: 'Ban hành pháp luật thành văn bản, do cơ quan nhà nước có thẩm quyền ban hành là đặc điểm của hình thức pháp luật nào sau đây?', answer: 'Văn bản quy phạm pháp luật' },
    { question: 'Hình thức pháp luật nào hiện nay được coi là hình thức pháp luật chủ yếu của mọi nhà nước, và được các Tòa án áp dụng trong công tác xét xử?', answer: 'Văn bản quy phạm pháp luật' },
    { question: 'Ở Việt Nam, hình thức pháp luật nào được xem là phương tiện quan trọng để thể hiện đường lối, chính sách của Đảng Cộng sản Việt Nam?', answer: 'Văn bản quy phạm pháp luật' },
    { question: 'Yếu tố nào sau đây được xem là linh hồn của các văn bản quy phạm pháp luật ở Việt Nam hiện nay?', answer: 'Đường lối, chính sách của Đảng Cộng sản Việt Nam' },
    { question: 'Sự khác nhau giữa tập quán và tập quán pháp thể hiện ở chỗ?', answer: 'Tất cả đều đúng' },
    { question: 'Ở Việt Nam những ngày như Tết nguyên đán, ngày rằm, các lễ hội được xem là?', answer: 'Tập quán' },
    { question: 'Khái niệm “Tập quán pháp” dùng để chỉ:', answer: 'Những thói quen được hình thành từ đời sống làm khuôn mẫu điều chỉnh hành vi của con người' },
    { question: 'Năm 2006, Hội đồng Thẩm phán TAND Tối cao có quyết định vụ tranh chấp dân sự về lấn chiếm đất và không gian giữa ông T với bà K. Sau này, nhiều tòa cấp dưới ngầm hiểu và giải quyết theo đường lối của bản án này. gọi là?', answer: 'tiền lệ pháp' },
    { question: 'Dân tộc Thái cấm phụ nữ vào gian thờ cúng tổ tiên là ví dụ về?', answer: 'Tập quán pháp' },
    { question: 'Hạn chế của tập quán pháp là?', answer: 'Đặc trưng của địa phương, khó áp dụng cho địa phương khác' },
    { question: 'Hình thức áp dụng cách giải quyết các vụ kiện dựa theo những vụ kiện chưa được nêu trong văn bản pháp luật, song đã từng giải quyết vụ kiện tương tự, hình thức pháp luật đó là?', answer: 'Tiền lệ pháp' },
    { question: 'phạm pháp luật thể hiện ở chỗ?', answer: 'Tất cả các đáp án trên' },
    { question: 'Quốc hội được phép ban hành văn bản nào sau đây?', answer: 'Hiến Pháp, luật, nghị quyết Quốc hội' },
    { question: 'Chủ tịch nước được phép ban hành văn bản pháp luật nào sau đây?', answer: 'Lệnh, nghị quyết' },
    { question: 'Chính phủ được phép ban hành văn bản pháp luật nào sau đây?', answer: 'Nghị định' },
    { question: 'Thủ tướng chính phủ được phép ban hành văn bản pháp luật nào sau đây?', answer: 'Quyết định' },
    { question: 'Văn bản luật là những văn bản nào sau đây?', answer: 'Tất cả các đáp án trên' },
    { question: 'Văn bản nào là văn bản dưới luật trong những văn bản dưới đây?', answer: 'Lệnh, Nghị quyết của Chủ tịch nước' },
    { question: 'Văn bản pháp luật nào được xem là “đạo luật mẹ” trong hệ thống văn bản pháp luật Việt Nam hiện nay?', answer: 'Hiến Pháp' },
    { question: 'Văn bản hướng dẫn thực hiện Hiến pháp và Pháp luật được gọi là?', answer: 'Nghị định' },
    { question: 'Trong một số trường hợp, Nghị định hướng dẫn thi hành luật cũng chưa áp dụng được thực tiễn nên cần đến loại văn bản luật Hướng dẫn thi hành Nghị định do các Bộ thuộc Chính phủ ban hành, văn bản đó gọi là gì?', answer: 'Thông Tư hướng dẫn thi hành Nghị định' },
    { question: 'Nhận định nào sau đây là KHÔNG chính xác?', answer: 'Pháp luật chỉ có thể được hình thành bằng con đường ban hành của nhà nước.' },
    { question: 'Khẳng định nào là đúng', answer: 'Tất cả đều sai.' },
    { question: 'Khẳng định nào sau đây là đúng:', answer: 'Tập quán pháp là tập quán có thể được nhà nước thừa nhận hoặc không cần phải được nhà nước thừa nhận; Tập quán pháp là tập quán được nhà nước thừa nhận' },
    { question: 'Pháp luật xã hội chủ nghĩa là do:', answer: 'Do nhà nước xã hội chủ nghĩa ban hành' },
    { question: 'Pháp luật có vai trò quan trọng đối với kinh tế, thể hiện ở việc:', answer: 'Tất cả đều đúng' },
   //chương 4
    { question: 'Quy phạm pháp luật là:', answer: 'Quy tắc xử sự có tính bắt buộc chung do nhà nước ban hành và bảo đảm thực hiện' },
    { question: 'Quy phạm pháp luật là quy tắc xử sự cho phép cá nhân:', answer: 'Chỉ được làm những việc mà luật cho phép và không cấm' },
    { question: 'Bộ phận nào của Quy phạm pháp luật nêu lên cách thức xử sự của chủ thể?', answer: 'Quy định' },
    { question: 'Tế bào nhỏ nhất trong hệ thống pháp luật là?', answer: 'Quy phạm pháp luật' },
    { question: 'Quy phạm xã hội được hiểu là?', answer: 'Quy tắc ứng xử của con người trong cuộc sống' },
    { question: 'Những quy tắc nào điều chỉnh các mối quan hệ xã hội của con người?', answer: 'Tất cả các đáp án trên' },
    { question: 'Quy phạm pháp luật được hiểu là?', answer: 'Tất cả các phương án trên' },
    { question: 'Những quy tắc hành vi được hình thành trong xã hội trên cơ sở quan niệm về đạo đức và được con người tự giác thực hiện, được gọi là quy phạm?', answer: 'Quy phạm đạo đức' },
    { question: 'Các quy phạm do các tổ chức xã hội đặt ra, nó tồn tại và được thực hiện trong các tổ chức xã hội đó, được gọi là quy phạm?', answer: 'Quy phạm của các tổ chức xã hội' },
    { question: 'Sự khác nhau căn bản của quy phạm pháp luật so với các quy phạm khác là?', answer: 'Được nhà nước công nhận và đảm bảo thực hiện' },
    { question: 'Sự khác nhau căn bản giữa quy phạm đạo đức, phong tục tập quán so với quy phạm pháp luật thể hiện ở chỗ?', answer: 'Đối tượng hẹp hơn' },
    { question: 'Cơ sở nào để thực hiện các quy tắc đạo đức trong đời sống xã hội?', answer: 'Lòng tin của con người' },
    { question: 'Cơ sở nào để thực hiện các quy tắc của phong tục tập quán trong đời sống xã hội?', answer: 'Thói quen' },
    { question: 'Cơ sở nào để thực hiện các quy tắc của quy phạm pháp luật trong đời sống xã hội?', answer: 'Cưỡng chế' },
    { question: 'Quy phạm pháp luật ra đời gắn liền với sự ra đời của?', answer: 'Pháp luật' },
    { question: 'Đặc điểm của quy phạm pháp luật?', answer: 'Tất cả các đáp án trên' },
    { question: 'Quy phạm pháp luật giải quyết những vấn đề nào sau đây?', answer: 'Tất cả các đáp án trên' },
    { question: 'Các bộ phận cấu thành các quy phạm pháp luật, gồm?', answer: 'Giả định – quy định – chế tài' },
    { question: 'Nêu rõ hoàn cảnh, điều kiện cụ thể của cuộc sống mà khi hoàn cảnh, điều kiện đó xảy ra thì người ở trong hoàn cảnh đó phải xử sự theo quy định của pháp luật. Được gọi là bộ phận nào sau đây?', answer: 'Giả định' },
    { question: 'Dấu hiệu nhận biết: giả định thường trả lời các câu hỏi: Người (tổ chức) nào? Khi nào? Trong hoàn cảnh nào? Điều kiện nào? Là bộ phận nào của quy phạm pháp luật', answer: 'Giả định' },
    { question: 'Bộ phận nào nếu thiếu thì làm cho quy phạm pháp luật trở nên vô nghĩa?', answer: 'Giả định' },
    { question: 'Có những loại giả định nào sau đây?', answer: 'Cả 2 đáp án (a và b) đều đúng' },
    { question: 'Nêu lên cách cư xử buộc người ta được làm hay không được làm, hoặc đã thực hiện những hành vi mà pháp luật cấm khi ở trong những hoàn cảnh, những điều kiện nào, được xem là bộ phận nào sau đây của quy phạm pháp luật?', answer: 'Quy định' },
    { question: 'Bộ phận nào của quy phạm pháp luật nêu lên quyền và nghĩa vụ trong những điều kiện, hoàn cảnh cụ thể?', answer: 'Quy định' },
    { question: 'Thông qua bộ phận nào, nhà nước xác định quyền và nghĩa vụ pháp lý của các chủ thể tham gia quan hệ xã hội mà quy phạm pháp luật điều chỉnh?', answer: 'Quy định' },
    { question: 'Bộ phận nào trả lời những câu hỏi như: phải làm gì? Được làm gì? Không được làm gì? Làm như thế nào?', answer: 'Quy định' },
    { question: 'Nêu biện pháp xử lý dự kiến sẽ áp dụng đối với những người đã xử sự không đúng hoặc làm trái quy định của nhà nước- trái với nội dung được quy định ở quy phạm pháp luật. Là bộ phận nào của quy phạm pháp luật?', answer: 'Chế tài' },
    { question: 'Bộ phận nào thường trả lời câu hỏi: hậu quả sẽ như thế nào nếu không làm đúng với quy định của nhà nước?', answer: 'Chế tài' },
    { question: 'Chế tài được hiểu là?', answer: 'Hậu quả bất lợi cho các chủ thể vi phạm pháp luật' },
    { question: 'Mục đích của chế tài là?', answer: 'Trừng trị những người vi phạm pháp luật, làm cho họ có ý thức tôn trọng và chấp hành pháp luật; Ngăn ngừa các khả năng có thể vi phạm pháp luật.' },
    // tới câu 30 chương 4
    { question: 'Sự khác nhau giữa Điều luật với Quy phạm pháp luật?', answer: 'Tất cả đều đúng' },
    { question: 'Trường hợp trong Điều luật chỉ có phần giả định và quy định, còn phần chế tài ở trong Điều luật khác, thậm chí trong các Bộ luật khác. Được gọi là?', answer: 'Gửi chế tài' },
    { question: 'Trường hợp trong điều luật, ta thấy quy phạm pháp luật chỉ có phần giả định và chế tài mà không thấy quy định. Trường hợp đó gọi là?', answer: 'Quy định ẩn' },
    { question: 'Điều 60 Luật Hôn nhân và Gia đình 2000: “Khi ly hôn, nếu một bên túng thiếu có yêu cầu cấp dưỡng mà có lý do chính đáng, thì bên kia có nghĩa vụ cấp dưỡng theo khả năng cấp dưỡng”. Đây là trường hợp nào sau đây?', answer: 'Gửi chế tài' },
    { question: 'Điều 29, Hiến pháp 1992 quy định: “Cơ quan Nhà nước, đơn vị vũ trang, tổ chức kinh tế, tổ chức xã hội, mọi cá nhân phải thực hiện các quy định của Nhà nước về sử dụng hợp lý tài nguyên thiên nhiên và bảo vệ môi trường”. Quy phạm pháp luật trên thuộc dạng nào sau đây?', answer: 'Gửi chế tài' },
    { question: 'Trong quy phạm pháp luật sau đây, đâu là Giả định? “Mọi công dân đều có quyền và nghĩa vụ học tập”?', answer: 'Mọi công dân' },
    { question: 'Khẳng định nào là đúng:', answer: 'Quy phạm đạo đức là quy phạm xã hội' },
    { question: 'Khẳng định nào là đúng:', answer: 'Quy phạm pháp luật là quy phạm xã hội' },
    { question: 'Đối với các quy phạm xã hội không phải là Quy phạm pháp luật, các chủ thể có phải tuân thủ không khi xử sự theo các quy phạm đó:', answer: 'Có thể phải tuân thủ hoặc không, tùy theo từng trường hợp cụ thể' },
    { question: 'Khẳng định nào sau đây là đúng:', answer: 'Quy phạm pháp luật là phần tử cấu thành nhỏ nhất của hệ thống pháp luật' },
    { question: '“ Văn bản quy phạm pháp luật phải được gửi đến cơ quan nhà nước có thẩm quyền để giám sát, kiểm tra” (Điều 10, Luật ban hành văn bản quy phạm pháp luật 2008). Trong quy phạm pháp luật trên, đâu là Giả định?', answer: 'Văn bản quy phạm pháp luật, cơ quan nhà nước' },
    { question: '“Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng đối với nhà đầu tư có hành vi đầu tư kinh doanh vốn nhà nước khi chưa được cơ quan có thẩm quyền thẩm định chấp thuận sử dụng vốn nhà nước để đầu tư” (Khoản 1, điều 23 nghị định 53/2007/NĐ-CP)Trong quy phạm pháp luật trên, đâu là chế tài?', answer: 'Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng' },
    //chuong 5
    { question: 'Khi tham gia một quan hệ pháp luật thì bắt buộc chủ thể tham gia quan hệ pháp luật đó phải có đủ các điều kiện cần thiết nào sau đây?', answer: 'Có đủ năng lực pháp luật và năng lực hành vi' },
    { question: 'Hành vi hợp pháp là:', answer: 'Làm đúng luật' },
    { question: 'Năng lực hành vi của chủ thể là:', answer: 'Khả năng của chủ thể tự mình thực hiện một cách độc lập các quyền và nghĩa vụ pháp lý' },
    { question: 'Năng lực hành vi của cá nhân chỉ xuất hiện khi:', answer: 'Cá nhân đạt đến một độ tuổi nhất định và không mắc các bệnh về tâm thần hoặc những bệnh khác làm mất khả năng nhân thức và điều khiển hành vi' },
    { question: 'Quyền của chủ thể trong quan hệ pháp luật được thể hiện:', answer: 'Tất cả đều đúng' },
    { question: 'Nghĩa vụ pháp lý của chủ thể trong quan hệ pháp luật được thể hiện:', answer: 'Tất cả đều đúng' },
    { question: 'Yếu tố nào sau đây là hành vi?', answer: 'Doanh nghiệp A trốn thuế' },
    { question: 'Chọn ý đúng về năng lực pháp luật của cá nhân:', answer: 'Năng lực pháp luật của cá nhân thông thường xuất hiện khi cá nhân sinh ra và mất đi khi cá nhân chết' },
    { question: 'Thành phần của quan hệ pháp luật bao gồm:', answer: 'Tất cả đều đúng' },
    { question: 'Quan hệ pháp luật khác với những quan hệ xã hội khác ở những điểm nào?', answer: 'Các bên chủ thể mang quyền và nghĩa vụ pháp lý' },
    { question: 'Tổ chức kinh doanh nào sau đây không có tư cách pháp nhân?', answer: 'Doanh nghiệp tư nhân' },
    { question: 'Hình thức của hợp đồng mua bán hàng hóa được thiết lập bằng:', answer: 'Tất cả đều đúng' },
    { question: 'Nhận định nào sau đây là đúng', answer: 'Quan hệ pháp luật là quan hệ xã hội' },
    { question: 'Quan hệ nào sau đây là quan hệ quan trọng, phổ biến, được nhà nước điều chỉnh?', answer: 'Quan hệ pháp luật' },
    { question: 'Quan hệ nào sau đây được điều chỉnh bằng những quy tắc ứng xử chung thể hiện ý chí của nhà nước?', answer: 'Quan hệ pháp luật' },
    { question: 'Quan hệ pháp luật được hiểu là?', answer: 'Tất cả các đáp án trên' },
    { question: 'Quan hệ nào sau đây thể hiện và phản ánh mối liên hệ giữa con người với con người trong những lĩnh vực khác nhau của đời sống xã hội?', answer: 'Quan hệ xã hội' },
    { question: 'Quan hệ nào sau đây, nếu không có, sẽ không được đảm bảo được lợi ích của các bên tham gia, hoặc lợi ích của cộng động, đòi hỏi Nhà nước phải đặt ra pháp luật để điều chỉnh các quan hệ như vậy?', answer: 'Quan hệ pháp luật' },
    { question: 'Điểm chung giữa quan hệ pháp luật và quan hệ đạo đức, quan hệ xã hội là?', answer: 'Tất cả các đáp án trên' },
    { question: 'Các chủ thể tham gia vào những mối quan hệ xã hội được pháp luật quy định thì phải xử sự theo cách thức của nhà nước đặt ra, là thể hiện tính chất nào của quan hệ pháp luật?', answer: 'Tính có ý chí' },
    { question: 'Khi tham gia vào các quan hệ pháp luật, các chủ thể cần có những điều kiện mà pháp luật quy định cho những quan hệ đó, là thể hiện tính chất nào sau đây của quan hệ pháp luật?', answer: 'Tính cơ cấu chủ thể' },
    { question: 'Giữa các chủ thể trong quan hệ pháp luật và quan hệ xã hội có điểm nào khác biệt?', answer: 'Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật được thể hiện rõ ràng' },
    { question: 'Nội dung trong quan hệ pháp luật đó là?', answer: 'Xác định quyền và nghĩa vụ của các bên tham gia' },
    { question: 'Biện pháp nào để Nhà nước đảm bảo các chủ thể phải thực hiện nghĩa vụ theo quy định của pháp luật?', answer: 'Cưỡng chế' },
    { question: 'Các quan hệ xã hội được hình thành, vận động và chịu sự giám sát bởi yếu tố nào sau đây?', answer: 'Dư luận xã hội' },
    { question: 'Quan hệ pháp luật chịu sự kiểm soát của nhà nước và được thực hiện bởi ý chí của nhà nước là tính chất nào của quan hệ pháp luật?', answer: 'Quyền được nhà nước đảm bảo thực hiện' },
    { question: 'Quan hệ pháp luật chịu sự kiểm soát bởi những yếu tố nào sau đây?', answer: 'Tất cả các đáp án trên' },
    { question: 'Các yếu tố của quan hệ pháp luật, bao gồm?', answer: 'Tất cả các đáp án trên' },
    { question: 'Yếu tố nào không có trong quan hệ pháp luật', answer: 'Chế tài xử lý các quan hệ pháp luật' },
    { question: 'Chủ thể của các quan hệ pháp luật bao gồm?', answer: 'Tổ chức; Cá nhân' },
    { question: 'Các loại chủ thể bao gồm', answer: 'Tất cả các đáp án trên' },
    { question: 'Điều kiện để cá nhân trở thành chủ thể quan hệ pháp luật?', answer: 'Có năng lực chủ thể ' },
    { question: 'Năng lực chủ thể của quan hệ pháp luật bao gồm?', answer: 'Năng lực hành vi; Năng lực pháp luật' },
    { question: 'Khả năng hưởng các quyền và nghĩa vụ pháp lý của pháp luật để họ có thể tham gia vào các quan hệ pháp luật cụ thể, được xem là?', answer: 'Năng lực pháp luật' },
    { question: 'Theo pháp luật nước ta, năng lực pháp luật của mỗi công dân phát sinh được tính từ khi nào?', answer: 'Từ khi sinh ra ' },
    { question: 'Thời điểm chấm dứt năng lực pháp luật theo quy định pháp luật của Việt Nam?', answer: 'Từ khi mất đi ' },
    { question: 'Ở Việt Nam, mỗi công dân có năng lực pháp lý khi?', answer: 'Khi còn sống ' },
    { question: 'Theo quy định pháp luật độ tuổi kết hôn của công dân Việt Nam, nam từ 20 tuổi trở lên, nữ từ 18 tuổi trở lên, năng lực nào được xuất hiện khi đủ độ tuổi?', answer: 'Năng lực pháp luật' },
    { question: 'Các chủ thể thông qua hành vi để tham gia vào các quan hệ pháp luật, được xem là năng lực?', answer: 'Năng lực hành vi' },
    { question: 'Điều kiện nào đảm bảo cá nhân có năng lực hành vi?', answer: 'Khả năng nhận thức, Điều khiển hành vi' },
    { question: 'Theo quy định của pháp luật, người thuộc độ tuổi nào trở lên phải chịu trách nhiệm hình sự về mọi tội phạm?', answer: '16 tuổi trở lên' },
    { question: 'Theo quy định của pháp luật, người thuộc độ tuổi nào trở lên phải chịu trách nhiệm hình sự về tội phạm rất nghiêm trọng do cố ý hoặc tội phạm đặc biệt nghiêm trọng?', answer: '14 tuổi trở lên' },
    { question: 'Theo luật Dân sự, người trong độ tuổi nào có người có năng lực hành vi dân sự đầy đủ?', answer: 'Người từ 18 tuổi trở lên, không mắc bệnh tâm thần và các bệnh khác không điều khiển được các hành vi' },
    { question: 'Theo luật Dân sự, điều kiện nào để công dân có năng lực hành vi dân sự đầy đủ', answer: 'Người từ 18 tuổi trở lên, Không mắc bệnh tâm thần, Điều khiển được các hành vi' },
    { question: 'Theo luật Dân sự, người trong độ tuổi nào không có người có năng lực hành vi dân sự đầy đủ?', answer: 'Người chưa đủ 6 tuổi, người mắc bệnh tâm thần, người mắc bệnh khác không điều khiển được hành vi' },
    { question: 'Theo luật Dân sự, điều kiện nào để xác định công dân không có năng lực hành vi dân sự đầy đủ?', answer: 'Người từ 6 tuổi trở lên, Người mắc bệnh tâm thần, Không điều khiển được các hành vi' },
    { question: 'Theo quy định của Luật Dân sự, người từ 6 đến 15 tuổi khi xác lập các quan hệ pháp luật phải có điều kiện nào sau đây?', answer: 'Phải có người đại diện theo pháp luật' },
    { question: 'Theo quy định của Luật Dân sự, người từ 15 đến 18 tuổi có tài sản riêng đủ đảm bảo thực hiện nghĩa vụ, thì cần có điều kiện nào sau đây để tham gia vào quan hệ pháp luật?', answer: 'Có thể tự xác lập thực hiện giao dịch' },
    { question: 'Các loại chủ thể là tổ chức?', answer: 'Tổ chức có tư cách pháp nhân, Tổ chức không có tư cách pháp nhân' },
    { question: 'Pháp nhân được xem là?', answer: 'Một con người giả định được gắn cho tổ chức; Hội tụ đủ những điều kiện của luật định; Trở thành một chủ thể của một số quan hệ pháp luật' },
    { question: 'Điều kiện để tổ chức được xem là tổ chức có tư cách pháp nhân?', answer: 'Được thành lập hợp pháp ; Có cơ cấu tổ chức chặt chẽ ; Có tài sản độc lập với các cá nhân và tự chịu trách nhiệm về tài sản đó;' },
    { question: 'Tổ chức có tư cách pháp nhân, phải là tổ chức', answer: 'Được nhà nước chấp nhận cho đăng ký thành lập' },
    { question: 'Tổ chức có tư cách pháp nhân phải đảm bảo điều kiện nào sau đây?', answer: 'Nhà nước cho phép thành lập và được cấp giấy chứng nhận thành lập' },
    { question: 'Điều kiện nào để tổ chức có tư cách pháp nhân?', answer: 'Có bộ máy, phòng ban, chuyên môn thực hiện mục đích' },
    { question: 'Điều kiện về mặt tài sản của các tổ chức có tư cách pháp nhân, đó là?', answer: 'Tài sản của các cá nhân phải độc lập với tài sản của tổ chức' },
    { question: 'Điểm khác biệt giữa tổ chức có tư cách pháp nhân và không có tư cách pháp nhân thể hiện ở chỗ?', answer: 'Tài sản cá nhân chủ sở hữu độc lập với tài sản tổ chức' },
    { question: 'Trong quá trình tồn tại, lợi nhuận của tổ chức có tư cách pháp nhân thuộc về?', answer: 'Tổ chức doanh nghiệp' },
    { question: 'Tổ chức không có tư cách pháp nhân là tổ chức?', answer: 'Tài sản của chủ sở hữu là tài sản của tổ chức, không được tách bạch rõ ràng' },
    { question: 'Muốn làm chủ doanh nghiệp có tư cách pháp nhân, các tổ chức không có tư cách pháp nhân cần phải làm gì?', answer: 'Tài sản của chủ sở hữu là tài sản của tổ chức, không được tách bạch rõ ràng' },
    //chương 6 
    { question: 'Luật đất đai năm 2013 quy định nội dung nào sau đây?', answer: 'Đất đai là tài sản thuộc sở hữu của toàn dân, do nhà nước thống nhất quản lý' },
    { question: 'Cục thuế tỉnh H ra quyết định xử phạt Doanh nghiệp A trốn thuế với số tiền phạt 3.000.000 đồng. Việc làm của cơ quan thuế tỉnh H gọi là:', answer: 'Áp dụng pháp luật' },
    { question: '', answer: 'Trách nhiệm dân sự' },
    { question: '', answer: 'Cưỡng ép kết hôn' },
    { question: '', answer: 'Sử dụng pháp luật' },
    { question: '', answer: '20 tuổi' },
    { question: '', answer: 'Cùng dòng máu trực hệ, có quan hệ họ hàng trong phạm vi 03 đời' },
    { question: 'Sinh viên vi phạm quy chế thi cử, phải chịu loại trách nhiệm nào sau đây:', answer: 'Trách nhiệm kỷ luật' },
    { question: '', answer: 'Khiển trách/ Chuyển làm công việc khác có mức lương thấp hơn trong thời hạn tối đa là sáu tháng/ Sa thải.' },
    { question: '', answer: 'Các chủ thể pháp luật thực hiện nghĩa vụ pháp lý của mình bằng những hành động tích cực' },
    { question: '', answer: 'Nhà nước thông qua các cơ quan Nhà nước có thẩm quyền tổ chức cho các chủ thể khác thực hiện những quy định của pháp luật hoặc tự mình căn cứ vào những quy định của pháp luật để ra các quyết định mang tính cá biệt nhằm điều chỉnh quan hệ xã hội theo những mục tiêu cụ thể' },
    { question: '', answer: 'Tất cả đều đúng' },
    { question: '', answer: 'Tuân thủ pháp luật' },
    { question: '', answer: 'Chấp hành pháp luật' },
    { question: '', answer: 'áp dụng pháp luật' }, //câu 17 chương 6
    { question: ' Phát hiện ông A có hành vi lừa đảo chiếm đoạt tài sản, bà K đã gửi đơn đến các cơ quan bảo vệ pháp luật để tố cáo ông A. Việc làm của bà K gọi là:', answer: 'Sử dụng pháp luật' },
    { question: 'Khẳng định nào sau đây là đúng?', answer: 'Mọi hành vi vi phạm pháp luật đều là hành vi trái pháp luật' },
    { question: 'Hành vi nào sau đây là vi phạm hình sự?', answer: 'Cố ý gây thương tích cho người khác với tỷ lệ thương tật 30%' },
    { question: 'Các hình thức xử phạt chính đối với chủ thể vi phạm hành chính gồm có:', answer: 'Cảnh cáo và phạt tiền' },
    { question: 'Hình phạt chỉ áp dụng đối với:', answer: 'Cá nhân' },
    { question: 'Bộ luật hình sự quy định : “Người phạm tội trong tình trạng say do dùng rượu hoặc chất kích thích mạnh khác, thì vẫn phải chịu ...". Họ sẽ bị tội nào sau đây?', answer: 'Trách nhiệm hình sự ' },
    { question: 'Một người chỉ bị coi là có tội khi:', answer: 'Bị toà án kết tội bằng bản án có hiệu lực pháp luật' },
    { question: 'Theo quy định của luật Hôn nhân và gia đình Việt Nam năm 2014 thì trường hợp nào sau đây không thuộc trường hợp cấm kết hôn:', answer: 'Kết hôn với người bị nhiễm HIV' },
    { question: 'Phạt cảnh cáo là:', answer: 'Phạt chính' },
    { question: 'Trục xuất là hình thức:', answer: 'Vừa phạt chính, vừa phạt bổ sung' },
    { question: 'ông A có hành vi xây dựng nhà ở trái phép. Hành vi này được coi là:', answer: 'Vi phạm hành chính' },
    { question: 'Lỗi nào sau đây chủ thể vi phạm không nhận thức được hành vi của mình là nguy hiểm cho xã hội?', answer: 'Vô ý do cẩu thả' },
    { question: 'Chị B không đội mũ bảo hiểm. Hành vi của chị B được coi là:', answer: 'Không chấp hành pháp luật' },
    { question: 'Chị M làm đơn yêu cầu tòa án nhân dân thành phố Biên Hòa tuyên bố chồng mình bị mất tích. Sau khi xem xét, Tòa án nhân dân thành phố Biên Hòa đã ra quyết định tuyên bố chồng chị M mất tích. Hỏi việc làm của Tòa án nhân dân thành phố Biên Hòa và của chị M là những hình thức thực hiện pháp luật nào?', answer: 'Áp dụng pháp luật và sử dụng pháp luật' },
    { question: 'Vì ghen nên ông A gây thương tích cho ông B. Lỗi của ông A trong trường hợp này là:', answer: 'Cố ý trực tiếp' },
    { question: 'Cấu thành của vi phạm pháp luật bao gồm 4 bộ phận:', answer: 'Mặt khách quan; Mặt chủ quan; chủ thể; khách thể' },
    { question: 'Lỗi nào sau đây chủ thể nhận thức được hành vi của mình là nguy hiểm cho xã hội nhưng lại thờ ơ, bỏ mặc chấp nhận hậu quả?', answer: 'Vô ý do cẩu thả' },
    { question: 'Lỗi cố ý gián tiếp sẽ chuyển thành lỗi nào nếu chủ thể biết rằng hậu quả sẽ chắc chắn xảy ra?', answer: 'Cố ý trực tiếp' },
    { question: 'Ông A tham nhũng tài sản nhà nước. Động cơ của ông A là:', answer: 'Động cơ vụ lợi' },
    { question: 'Ông K gây thương tích cho ông H với tỷ lệ thương tật là 41%. Hành vi của ông K thuộc loại vi phạm pháp luật nào?', answer: 'Hình sự' },
    { question: 'Công ty A vi phạm hợp đồng với công ty B. Hành vi của công ty A thuộc loại vi phạm pháp luật:', answer: 'Dân sự' },
    { question: 'Trường hợp nào sau đây sẽ được loại trừ lỗi?', answer: 'Tất cả đều đúng' },
    { question: 'Thiệt hại nào sau đây không phải là thiệt hại về vật chất?', answer: 'Danh dự' },
    { question: 'Yếu tố nào sạu đây không thuộc mặt chủ quan của vi phạm pháp luật?', answer: 'Hành vi' },
    { question: 'Trách nhiệm pháp lý nào sau đây được coi là trách nhiệm nặng nhất?', answer: 'Trách nhiệm hình sự' },
    { question: 'Người bắt được gia súc của người khác thất lạc phải nuôi giữ gia súc và phải khai báo với chính quyền địa phương. Sau 6 tháng kể từ ngày nào thì người bắt được sẽ được xác lập quyền sở hữu của mình?', answer: 'Kể từ ngày khai báo với chính quyền địa phương' },
    { question: 'Anh X 21 tuổi phạm tôi: cướp tài sản, giết người bị tòa án có thẩm quyền tuyên phạt 28 năm tù giam. Giả sử anh Y 17 tuổi phạm có cùng hành vi phạm tội tương tự như anh X thì sẽ bị xử phạt bao nhiêu năm tù giam?', answer: '18 năm' },
    { question: 'Anh K 19 tuổi phạm tôi: cướp giật, trộm cắp tài sản bị tòa án có thẩm quyền tuyên phạt tổng 28 năm tù giam. Giả sử anh S 15 tuổi phạm có cùng hành vi phạm tội tương tự như anh K thì sẽ bị xử phạt bao nhiêu năm tù giam?', answer: '12' },
    { question: 'Việc kết hôn giữa hai người Việt Nam với nhau ở Việt Nam do cơ quan nào giải quyết:', answer: 'Ủy ban nhân dân cấp xã' },
    { question: 'A dùng xe máy đi đánh bạc. Xe máy được coi là:', answer: 'Phương tiện vi phạm' },
    { question: 'Yếu tố nào sau đây là yếu tố bắt buộc trong cấu thành của mọi vi phạm phạm pháp luật', answer: 'Hành vi' },
    { question: 'Anh A dùng dao khống chế chị B để cướp sợi dây chuyền. Đâu là công cụ vi phạm pháp luật?', answer: 'Con dao' },
    { question: 'Anh A dùng dao khống chế chị B và chị C để cướp sợi dây chuyền. Yếu tố nào là chủ thể của vi phạm pháp luật?', answer: 'Anh A' },
    { question: 'Người nào sau đây không thuộc diện thừa kế?', answer: 'Bạn thân của người chết' },
];

document.addEventListener('mouseup', function () {

    // Lấy đoạn văn bản được bôi đen sau khi nhả chuột
    // const selectedText = window.getSelection().toString().trim().toLowerCase();
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        // Lấy phạm vi của đoạn văn bản được bôi đen
        const range = window.getSelection().getRangeAt(0);
        // Lấy vị trí và kích thước của đoạn văn bản được bôi đen trên màn hình
        const rect = range.getBoundingClientRect();
        // Tạo một thẻ div để làm biểu tượng tiện ích
        const icon = document.createElement('div');
        // Gán id cho thẻ div
        icon.id = 'textScannerIcon';
        // Đặt vị trí tuyệt đối cho thẻ div dựa trên vị trí của đoạn văn bản được bôi đen
        icon.style.position = 'absolute';
        icon.style.left = `${rect.right + window.scrollX}px`;
        icon.style.top = `${rect.top + window.scrollY}px`;
        // Đặt kích thước của thẻ div
        icon.style.width = '20px';
        icon.style.height = '20px';
        // Đặt màu nền cho thẻ div (có thể thay bằng hình ảnh như đã đề cập trước đó)
        icon.style.backgroundColor = '#F5F5F5';
        icon.style.backgroundSize = 'cover';
        // Làm cho thẻ div có hình tròn
        icon.style.borderRadius = '50%';
        // Thay đổi con trỏ chuột khi di chuyển lên thẻ div
        icon.style.cursor = 'pointer';
        // Đặt chỉ số z-index cao để thẻ div luôn hiển thị trên cùng
        icon.style.zIndex = '9999';
        // Thêm thẻ div vào body của trang
        document.body.appendChild(icon);

        // Thêm sự kiện onclick cho biểu tượng để hiển thị văn bản đã bôi đen
        icon.onclick = () => showSelectedText(selectedText, rect);
    }
});

function removeSpecialCharacters(str) {
    return str.replace(/[“”"'()\s!.,?:]/g, '');
}

// Hàm kiểm tra và hiển thị câu trả lời
function checkAndDisplayAnswer(text) {
    const entry = data.find(item => removeSpecialCharacters(item.question.trim().toLowerCase()) === removeSpecialCharacters(text.trim().toLowerCase()));

    if (entry) {
        // Nếu tìm thấy, hiển thị câu trả lời
        return entry.answer;
    } else {
        // Nếu không tìm thấy, hiển thị thông báo mặc định
        return "Không biết, chọn đại đi (^_^)";
    }
}

function showSelectedText(text, rect) {
    // Xóa bất kỳ thẻ hiển thị văn bản nào đang tồn tại
    removeTextDisplay();

    // Tạo một thẻ div để hiển thị văn bản đã bôi đen
    const displayDiv = document.createElement('div');
    displayDiv.id = 'textDisplay';
    displayDiv.style.position = 'absolute';
    // Đặt vị trí của thẻ div phía trên đoạn văn bản được bôi đen
    displayDiv.style.left = `${rect.left + window.scrollX}px`;
    displayDiv.style.top = `${rect.top + window.scrollY - 30}px`;
    displayDiv.style.backgroundColor = '#F5F5F5';
    displayDiv.style.border = '1px solid black';
    displayDiv.style.padding = '5px';
    displayDiv.style.zIndex = '9999';


    // Sử dụng hàm với đoạn văn bản đã bôi đen và phần tử để hiển thị câu trả lời
    const selectedText = text; // Ví dụ: đoạn văn bản đã bôi đen

    displayDiv.textContent = checkAndDisplayAnswer(selectedText);

    // Thêm thẻ div vào body của trang
    document.body.appendChild(displayDiv);

    // Thêm sự kiện để ẩn văn bản khi nhấp vào bất kỳ chỗ nào khác trên trang
    document.addEventListener('click', hideTextOnClick, true);

    // Xóa biểu tượng sau khi hiển thị văn bản
    const icon = document.getElementById('textScannerIcon');
    if (icon) {
        icon.remove();
    }
}

function hideTextOnClick(event) {
    // Lấy thẻ hiển thị văn bản
    const displayDiv = document.getElementById('textDisplay');
    // Nếu thẻ hiển thị văn bản tồn tại và không phải là thẻ được nhấp vào
    if (displayDiv && !displayDiv.contains(event.target)) {
        // Xóa thẻ hiển thị văn bản
        removeTextDisplay();
        // Xóa sự kiện click để ẩn văn bản
        document.removeEventListener('click', hideTextOnClick, true);
    }
}

function removeTextDisplay() {
    // Lấy thẻ hiển thị văn bản
    const displayDiv = document.getElementById('textDisplay');

    // Nếu thẻ hiển thị văn bản tồn tại thì xóa nó
    if (displayDiv) {
        displayDiv.remove();
    }
}
