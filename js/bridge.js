class Bridge {
  constructor(el) {
    this.el = document.querySelector(el);
    this.code = this.el.innerHTML;
    this.data = {}
  }

  _sub(template, data) {
    return template.replace(/\\?{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g, function(match) {
      if (match[0] == '\\') return match.slice(1)
      match = match.replace(/\s+/g, '');
      if (match.slice(2, -2) in data) {
        return data[match.slice(2, -2)];
      } else {
        return '';
      }
    });
  }

  cross(args) {
    for (let arg in args) {
      this.data[arg] = args[arg];
    }
    this.el.innerHTML = this._sub(this.code, this.data);
  }
}
