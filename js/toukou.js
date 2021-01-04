$(function () {
    // クリックで画像を選択する場合
    $("#drop-area").on('click', function () {
        $("#input-img").click();
    });

    $("#input-img").on('change', function () {
        //画像が複数選択されていた場合
        if (this.files.length > 1) {
            alert('アップロードできる画像はひとつだけです');
            $("#input-img").val('');
            return;
        }
        handleFiles(this.files);
    });

    // ドラッグしている要素がドロップ領域に入ったとき・領域にいる間
    $("#drop-area").on('dragenter, dragover', function (event) {
        event.stopPropagation();
        event.preventDefault();
        $("#drop-area").css('border', '2px solid #8a5b58');
    });

    // ドラッグしている要素がドロップ領域から外れたとき
    $("#drop-area").css('border', '2px dashed #8a5b58');

    // ドラッグしている要素がドロップされたとき
    $("#drop-area").on('drop', function (event) {
        event.preventDefault();
        $("#input-img")[0].files = event.originalEvent.dataTransfer.files;

        // 画像が複数選択されていた場合
        if ($("#input-img")[0].files.length > 1) {
            alert('アップロードできる画像はひとつだけです');
            $("#input-img").val('');
            return;
        }
        handleFiles($("#input-img")[0].files);
    });

    // 選択された画像ファイルの操作
    function handleFiles(files) {
        let file = files[0];
        let imageType = 'image.*';

        // ファイルが画像か確認する
        if (!file.type.match(imageType)) {
            alert('画像を選択してください');
            $("#input-img").val('');
            $("#drop-area").css('border', '2px dashed #8a5b58');
            return;
        }

        // 一番上のdrop-area非表示
        $("#drop-area").hide();
        // btn-clear表示
        $(".btn-clear").show();

        let img = document.createElement('img'); // <img>作成
        let reader = new FileReader();

        reader.onload = function () {   // 読み込みが完了したら
            img.src = reader.result; // readAsDataURLの読み込み結果がresult
            $("#preview-img").append(img); // preview-areaに画像を表示
            $('img').addClass('resize-img'); // imgにresize-imgクラスを付与
        }
        reader.readAsDataURL(file); // ファイル読み込みを非同期でバックグラウンドで開始
    }

    // 画像を消去するボタン
    $(".btn-clear").on('click', function () {
        $("#preview-img").empty(); // 表示していた画像を消去
        $("#preview-area").val(''); // preview-areaの中身を消去
        $("#input-img").val(''); // input-imgの中身を消去
        $("#drop-area").show(); // drop-areaを最前面に表示
        $(".btn-clear").hide(); // btn-clearを非表示
        $("#drop-area").css('border', '2px dashed #8a5b58'); // 枠を変更
    });

    // drop-area以外でファイルがドロップされた場合、ファイルが開いてしまうのを防ぐ
    $(document).on('dragenter', function (event) {
        event.stopPropagation();
        event.preventDefault();
    });
    $(document).on('dragover', function () {
        event.stopPropagation();
        event.preventDefault();
    });
    $(document).on('drop', function (event) {
        event.stopPropagation();
        event.preventDefault();
    });
});
