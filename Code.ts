function test(): void {
    var url:string = 'https://hapitas.jp/item/detail/itemid/69141';
    var url:string = 'https://hapitas.jp/item/detail/itemid/33008';
    var response:HTTPResponse = UrlFetchApp.fetch(url);
    var html:string = response.getContentText('UTF-8');

    var itemid:string   = html.match(/<meta name="cXenseParse:ozv-itemid" content="(\d+)" /)[1];
    var title:string    = html.match(/<meta name="cXenseParse:ozv-title" content="(.+)" /)[1];
    var category:string = html.match(/<meta name="cXenseParse:ozv-detailcategory" content="(.+)" /)[1];
    var point:string    = html.match(/<li class="item_point"><strong class="point">(.+)<span class="pointback_unit">ポイントバック/)[1];
    var banner:string   = html.match(/<span class="banner"><img src="(.+)" /)[1];

    Logger.log(itemid);
    Logger.log(title);
    Logger.log(category);
    point = point.replace('<del>', '').replace('</del>', '').replace('<ins>', ',').replace('</ins>', '').replace('</strong>', '');
    Logger.log(point);
    Logger.log(banner);
    Logger.log(html);

}
