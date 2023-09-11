// 除去文章标签得到文字内容
export function ripTags(content) {
  if (!content) return '';
  content = content.replace(/(<([^>]+)>)/ig, '');
  content = content.replace(/&nbsp;/ig, ' ')
  content = content.replace(/&#39;/ig, '\'')
  return content
}
  
// 利用JS截取字符串，避免中英文混合时的长度显示问题
export function truncate(content, length) {
  if (content.length < length) {
      return content
  } else {
      var count = 0;
      var output = '';
      for (var i in content) {
          output += content.charAt(i);
          // 获取ASCII码
          var code = content.charCodeAt(i);
          if (code <= 128) {
              count += 0.5;
          } else {
              count += 1;
          }
          if (count > length) {
              break;
          }
      }
      if (output[-1] == '。' ){
          return output.slice(0,-1) + '...'
      }else{
          return output + '...'
      }
  }
}


