hidden-xs
@media (max-width: 767px){
    .hidden-xs {
        display: none!important;
    }
}

@media (max-width: 991px) and (min-width: 768px){
    .hidden-sm {
        display: none!important;
    }
}

@media (min-width: 768px){
    .col-sm-2 {
        width: 16.66666667%;
    }
}

//���кܶ�btn-block�ֵ�Ԫ��ʱ�������ڵ�һ��btn-block������ֵ�btn-block��������5px;
.btn-block+.btn-block {
    margin-top: 5px;
}

��б��ǿ��һ���ı���
<em>rendered as italicized text</em>

ͨ���ı������࣬���Լ򵥷���Ľ��������¶��롣
<p class="text-left">Left aligned text.</p>
<p class="text-nowrap">No wrap text.</p>
.text-nowrap {
    white-space: nowrap;
}

ͨ���⼸������Ըı��ı��Ĵ�Сд��
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
.text-uppercase {
    text-transform: uppercase;
}

������
�������ͣ����д����д����ʱ�ͻ���ʾ�������ݣ�Bootstrap ʵ���˶� HTML �� <abbr> Ԫ�ص���ǿ��ʽ��
<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>

����������ʽ
���ڱ�׼��ʽ�� <blockquote>������ͨ�������򵥵ı�����ܸı�������ݡ�
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

����ʽ�б�
�Ƴ���Ĭ�ϵ� list-style ��ʽ�������߾��һ��Ԫ�أ�ֻ���ֱ����Ԫ�أ����������ֱ����Ԫ�صģ�Ҳ����˵������Ҫ������Ƕ�׵��б�����������ܾ���ͬ������ʽ��
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>

�����б�
ͨ������ display: inline-block; ������������ڲ���padding����������Ԫ�ط�����ͬһ�С�
<ul class="list-inline">
  <li>Lorem ipsum</li>
  <li>Phasellus iaculis</li>
  <li>Nulla volutpat</li>
</ul>

����
���������Ķ����б�
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>

�û�����
ͨ�� <kbd> ��ǩ����û�ͨ��������������ݡ�
<kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

�����
���д������ʹ�� <pre> ��ǩ��Ϊ����ȷ��չʾ���룬ע�⽫��������ת�崦��
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>

״̬��
ͨ����Щ״̬�����Ϊ�л�Ԫ��������ɫ��
.active    �����ͣ���л�Ԫ����ʱ�����õ���ɫ
.success    ��ʶ�ɹ�������Ķ���
.info    ��ʶ��ͨ����ʾ��Ϣ����
.warning    ��ʶ�������Ҫ�û�ע��
.danger    ��ʶΣ�ջ�Ǳ�ڵĴ�������Ӱ��Ķ���

ˮƽ���еı�
<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>


�ı���
֧�ֶ����ı��ı��ؼ����ɸ�����Ҫ�ı� rows ���ԡ�
<textarea class="form-control" rows="3"></textarea>

��ѡ�͵�ѡ��
<div class="checkbox">
  <label>
    <input type="checkbox" value="">
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="checkbox disabled">
  <label>
    <input type="checkbox" value="" disabled>
    Option two is disabled
  </label>
</div>

<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
    Option two can be something else and selecting it will deselect option one
  </label>
</div>
<div class="radio disabled">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
    Option three is disabled
  </label>
</div>

������ѡ�Ͷ�ѡ��
ͨ���� .checkbox-inline �� .radio-inline ��Ӧ�õ�һϵ�еĶ�ѡ��checkbox����ѡ��radio���ؼ��ϣ�����ʹ��Щ�ؼ�������һ�С�
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
</label>

<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3
</label>

�����б�select��
ע�⣬�ܶ�ԭ��ѡ��˵� - ���� Safari �� Chrome �� - ��Բ�����޷�ͨ���޸� border-radius �������ı�ġ�
<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>

���ڱ���� multiple ���Ե� <select> �ؼ���˵��Ĭ����ʾ��ѡ�
<select multiple class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>


��̬�ؼ�
�����Ҫ�ڱ��н�һ�д��ı��� label Ԫ�ط�����ͬһ�У�Ϊ <p> Ԫ����� .form-control-static �༴�ɡ�
<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>

����״̬
Ϊ��������� disabled ���Կ��Խ�ֹ�����û����κν��������㡢����ȣ��������õ��������ɫ��ǳ�����һ������ not-allowed ���״̬��
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>

ֻ��״̬
Ϊ��������� readonly ���Կ��Խ�ֹ�û��޸�������е����ݡ�����ֻ��״̬���������ɫ��ǳ�����񱻽��õ������һ������������Ȼ������׼�����״̬��
<input class="form-control" type="text" placeholder="Readonly input here��" readonly>

У��״̬
Bootstrap �Ա��ؼ���У��״̬���� error��warning �� success ״̬������������ʽ��ʹ��ʱ����� .has-warning��.has-error �� .has-success �ൽ��Щ�ؼ��ĸ�Ԫ�ؼ��ɡ��κΰ����ڴ�Ԫ��֮�ڵ� .control-label��.form-control �� .help-block Ԫ�ض���������ЩУ��״̬����ʽ��
<div class="form-group has-success">
  <label class="control-label" for="inputSuccess1">Input with success</label>
  <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
  <span id="helpBlock2" class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
</div>
<div class="form-group has-warning">
  <label class="control-label" for="inputWarning1">Input with warning</label>
  <input type="text" class="form-control" id="inputWarning1">
</div>
<div class="form-group has-error">
  <label class="control-label" for="inputError1">Input with error</label>
  <input type="text" class="form-control" id="inputError1">
</div>
<div class="has-success">
  <div class="checkbox">
    <label>
      <input type="checkbox" id="checkboxSuccess" value="option1">
      Checkbox with success
    </label>
  </div>
</div>
<div class="has-warning">
  <div class="checkbox">
    <label>
      <input type="checkbox" id="checkboxWarning" value="option1">
      Checkbox with warning
    </label>
  </div>
</div>
<div class="has-error">
  <div class="checkbox">
    <label>
      <input type="checkbox" id="checkboxError" value="option1">
      Checkbox with error
    </label>
  </div>
</div>

��Ӷ����ͼ��
�㻹�������У��״̬Ϊ�������Ӷ����ͼ�ꡣֻ��������Ӧ�� .has-feedback �ಢ�����ȷ��ͼ�꼴�ɡ�
����ͼ�꣨feedback icon��ֻ��ʹ�����ı������ <input class="form-control"> Ԫ���ϡ�
ͼ�ꡢlabel ������ؼ���
���ڲ����� label ��ǩ��������Լ��Ҳ���и��������������飬��Ҫ�ֶ�Ϊ��ͼ�궨λ��Ϊ���������û����ܷ��������վ������ǿ�ҽ���Ϊ������������ label ��ǩ������㲻ϣ���� label ��ǩչʾ����������ͨ����� .sr-only ����ʵ�֡������ȷ������� label ��ǩ�������ͼ��� top ֵ������������飬��������ʵ��������� right ֵ��

<div class="form-group has-success has-feedback">
  <label class="control-label" for="inputSuccess2">Input with success</label>
  <input type="text" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status">
  <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
</div>
<div class="form-group has-warning has-feedback">
  <label class="control-label" for="inputWarning2">Input with warning</label>
  <input type="text" class="form-control" id="inputWarning2" aria-describedby="inputWarning2Status">
  <span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>
  <span id="inputWarning2Status" class="sr-only">(warning)</span>
</div>
<div class="form-group has-error has-feedback">
  <label class="control-label" for="inputError2">Input with error</label>
  <input type="text" class="form-control" id="inputError2" aria-describedby="inputError2Status">
  <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
  <span id="inputError2Status" class="sr-only">(error)</span>
</div>
<div class="form-group has-success has-feedback">
  <label class="control-label" for="inputGroupSuccess1">Input group with success</label>
  <div class="input-group">
    <span class="input-group-addon">@</span>
    <input type="text" class="form-control" id="inputGroupSuccess1" aria-describedby="inputGroupSuccess1Status">
  </div>
  <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
  <span id="inputGroupSuccess1Status" class="sr-only">(success)</span>
</div>

�ؼ��ߴ�
ͨ�� .input-lg ���Ƶ������Ϊ�ؼ����ø߶ȣ�ͨ�� .col-lg-* ���Ƶ������Ϊ�ؼ����ÿ�ȡ�
<input class="form-control input-lg" type="text" placeholder=".input-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control input-sm" type="text" placeholder=".input-sm">

<select class="form-control input-lg">...</select>
<select class="form-control">...</select>
<select class="form-control input-sm">...</select>

ˮƽ���еı���ĳߴ�
ͨ����� .form-group-lg �� .form-group-sm �࣬Ϊ .form-horizontal ������ label Ԫ�غͱ��ؼ��������óߴ硣
<form class="form-horizontal">
  <div class="form-group form-group-lg">
    <label class="col-sm-2 control-label" for="formGroupInputLarge">Large label</label>
    <div class="col-sm-10">
      <input class="form-control" type="text" id="formGroupInputLarge" placeholder="Large input">
    </div>
  </div>
  <div class="form-group form-group-sm">
    <label class="col-sm-2 control-label" for="formGroupInputSmall">Small label</label>
    <div class="col-sm-10">
      <input class="form-control" type="text" id="formGroupInputSmall" placeholder="Small input">
    </div>
  </div>
</form>

�����У�column���ߴ�
��դ��ϵͳ�е��У�column���������������κθ�Ԫ�أ����ɺ����׵�Ϊ�����ÿ�ȡ�
<div class="row">
  <div class="col-xs-2">
    <input type="text" class="form-control" placeholder=".col-xs-2">
  </div>
  <div class="col-xs-3">
    <input type="text" class="form-control" placeholder=".col-xs-3">
  </div>
  <div class="col-xs-4">
    <input type="text" class="form-control" placeholder=".col-xs-4">
  </div>
</div>

��ť
����Ϊ��ťʹ�õı�ǩ��Ԫ��
Ϊ <a>��<button> �� <input> Ԫ����Ӱ�ť�ࣨbutton class������ʹ�� Bootstrap �ṩ����ʽ��
<form class="bs-example" data-example-id="btn-tags">
    <a class="btn btn-default" href="#" role="button">Link</a>
    <button class="btn btn-default" type="submit">Button</button>
    <input class="btn btn-default" type="button" value="Input">
    <input class="btn btn-default" type="submit" value="Submit">
</form>

��������ע������
��Ȼ��ť�����Ӧ�õ� <a> �� <button> Ԫ���ϣ����ǣ������͵��������ֻ֧�� <button> Ԫ�ء�

���ӱ���Ϊ��ťʹ��ʱ��ע������
��� <a> Ԫ�ر���Ϊ��ťʹ�� -- �������ڵ�ǰҳ�津��ĳЩ���� -- ������������������ҳ������ӵ�ǰҳ���е��������֣���ô�����Ϊ������ role="button" ���ԡ�


Ԥ������ʽ
ʹ�������г�������Կ��ٴ���һ������Ԥ������ʽ�İ�ť��
<button type="button" class="btn btn-default">��Ĭ����ʽ��Default</button>
<button type="button" class="btn btn-primary">����ѡ�Primary</button>
<button type="button" class="btn btn-success">���ɹ���Success</button>
<button type="button" class="btn btn-info">��һ����Ϣ��Info</button>
<button type="button" class="btn btn-warning">�����棩Warning</button>
<button type="button" class="btn btn-danger">��Σ�գ�Danger</button>
<button type="button" class="btn btn-link">�����ӣ�Link</button>

�ߴ�
��Ҫ�ð�ť���в�ͬ�ߴ���ʹ�� .btn-lg��.btn-sm �� .btn-xs �Ϳ��Ի�ò�ͬ�ߴ�İ�ť��

ͨ������ť��� .btn-block ����Խ�����������Ԫ��100%�Ŀ�ȣ����Ұ�ťҲ��Ϊ�˿鼶��block��Ԫ�ء�
<div class="well center-block" style="max-width: 400px;">
  <button type="button" class="btn btn-primary btn-lg btn-block">���鼶Ԫ�أ�Block level button</button>
  <button type="button" class="btn btn-default btn-lg btn-block">���鼶Ԫ�أ�Block level button</button>
</div>

����״̬
����ť���ڼ���״̬ʱ�������Ϊ����ѹ��ȥ����ɫ����߿�ҹɫ�������Ͷ����Ӱ�������� <button> Ԫ�أ���ͨ�� :active ״̬ʵ�ֵġ����� <a> Ԫ�أ���ͨ�� .active ��ʵ�ֵġ�Ȼ�����㻹���Խ� .active Ӧ�õ� <button> �ϣ����� aria-pressed="true" ����)������ͨ����̵ķ�ʽʹ�䴦�ڼ���״̬��
<button type="button" class="btn btn-primary btn-lg active">Primary button</button>
<button type="button" class="btn btn-default btn-lg active">Button</button>

����״̬
ͨ��Ϊ��ť�ı������� opacity ���ԾͿ��Գ��ֳ��޷������Ч����
button Ԫ��
Ϊ <button> Ԫ����� disabled ���ԣ�ʹ����ֳ�����״̬��
<button type="button" class="btn btn-lg btn-primary" disabled="disabled">Primary button</button>
<button type="button" class="btn btn-default btn-lg" disabled="disabled">Button</button>

ͼƬ��״
ͨ��Ϊ <img> Ԫ�����������Ӧ���࣬������ͼƬ���ֲ�ͬ����״��
��ʱ���μǣ�Internet Explorer 8 ��֧�� CSS3 �е�Բ�����ԡ�
<img src="..." alt="..." class="img-rounded">
<img src="..." alt="..." class="img-circle">
<img src="..." alt="..." class="img-thumbnail">

�龳�ı���ɫ
<p class="text-muted">...</p>
<p class="text-primary">...</p>
<p class="text-success">...</p>
<p class="text-info">...</p>
<p class="text-warning">...</p>
<p class="text-danger">...</p>

�龳����ɫ
<p class="bg-primary">...</p>
<p class="bg-success">...</p>
<p class="bg-info">...</p>
<p class="bg-warning">...</p>
<p class="bg-danger">...</p>

�رհ�ť
ͨ��ʹ��һ�������رյ�ͼ�꣬������ģ̬��;������ʧ��
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>

���Ƿ���
ͨ��ʹ�����Ƿ��ſ���ָʾĳ��Ԫ�ؾ��������˵��Ĺ��ܡ�ע�⣬���ϵ���ʽ�˵��е����Ƿ����Ƿ�����ġ�
<span class="caret"></span>

���ٸ���
ͨ�����һ���࣬���Խ�����Ԫ����������Ҹ�����!important ��������ȷ CSS ��ʽ�����ȼ�����Щ�໹������Ϊ mixin���μ� less �ĵ��� ʹ�á�
<div class="pull-left">...</div>
<div class="pull-right">...</div>
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}
�������ڵ����������
���е������е����ʱ����ʹ����Щ�����ࣺ.navbar-left �� .navbar-right �� �μ��������ĵ��Ի�ȡ������Ϣ��


�����ݿ����
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

��ʾ����������
.show �� .hidden �����ǿ������Ԫ����ʾ������(������Ļ�Ķ���Ҳ����Ч)����Щ��ͨ�� !important ������ CSS ��ʽ���ȼ����⣬���� quick floats һ����������ע�⣬��Щ��ֻ�Կ鼶Ԫ�������ã����⣬��������Ϊ mixin ʹ�á�

��Ӧʽ����
Ϊ�˼ӿ���ƶ��豸�Ѻõ�ҳ�濪������������ý���ѯ���ܲ�ʹ����Щ��������Է������Բ�ͬ�豸չʾ������ҳ�����ݡ����⻹��������Դ�ӡ����ʾ���������ݵĹ����ࡣ
������Ե�ʹ�����๤���࣬�Ӷ�����Ϊͬһ����վ������ȫ��ͬ�İ汾���෴��ͨ��ʹ����Щ����������ڲ�ͬ�豸���ṩ��ͬ��չ����ʽ��

���õ���
ͨ������������ʹ�������г����࣬������Բ�ͬ��Ļ�ߴ����ػ���ʾҳ�����ݡ�


��������
��������������С�������������豸��ҳ�棬�����Բ�����Щ��Ӧʽ�����ࡣ
��...�Ͽɼ�
������ɫ��ǵ�Ԫ�ر�ʾ���ڵ�ǰ������ӿڣ�viewport�����ǿɼ��ġ�
<div class="row responsive-utilities-test visible-on">
    <div class="col-xs-6">
      <span class="hidden-xs">��С��Ļ</span>
      <span class="visible-xs-block">? �ڳ�С��Ļ�Ͽɼ�</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-sm">С��Ļ</span>
      <span class="visible-sm-block">? ��С��Ļ�Ͽɼ�</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
      <span class="hidden-md">�е���Ļ</span>
      <span class="visible-md-block">? ���е���Ļ�Ͽɼ�</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-lg">����Ļ</span>
      <span class="visible-lg-block">? �ڴ���Ļ�Ͽɼ�</span>
    </div>
</div>
<div class="row responsive-utilities-test visible-on">
    <div class="col-xs-6">
      <span class="hidden-xs hidden-sm">��С��Ļ��С��Ļ</span>
      <span class="visible-xs-block visible-sm-block">? �ڳ�С��Ļ��С��Ļ�Ͽɼ�</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-md hidden-lg">�е���Ļ�ʹ���Ļ</span>
      <span class="visible-md-block visible-lg-block">? ���е���Ļ�ʹ���Ļ�Ͽɼ�</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
      <span class="hidden-xs hidden-md">��С��Ļ���е���Ļ</span>
      <span class="visible-xs-block visible-md-block">? �ڳ�С��Ļ���е���Ļ�Ͽɼ�</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-sm hidden-lg">С��Ļ�ʹ���Ļ</span>
      <span class="visible-sm-block visible-lg-block">? ��С��Ļ�ʹ���Ļ�Ͽɼ�</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
      <span class="hidden-xs hidden-lg">��С��Ļ�ʹ���Ļ</span>
      <span class="visible-xs-block visible-lg-block">? �ڳ�С��Ļ�ʹ���Ļ�Ͽɼ�</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-sm hidden-md">С��Ļ���е���Ļ</span>
      <span class="visible-sm-block visible-md-block">? ��С��Ļ���е���Ļ�Ͽɼ�</span>
    </div>
</div>


��...������
������ɫ��ǵ�Ԫ�ر�ʾ���ڵ�ǰ������ӿڣ�viewport���������صġ�
<div class="row responsive-utilities-test hidden-on">
    <div class="col-xs-6 col-sm-3">
      <span class="hidden-xs">��С��Ļ</span>
      <span class="visible-xs-block">? �ڳ�С��Ļ������</span>
    </div>
    <div class="col-xs-6 col-sm-3">
      <span class="hidden-sm">С��Ļ</span>
      <span class="visible-sm-block">? ��С��Ļ������</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6 col-sm-3">
      <span class="hidden-md">�е���Ļ</span>
      <span class="visible-md-block">? ���е���Ļ������</span>
    </div>
    <div class="col-xs-6 col-sm-3">
      <span class="hidden-lg">����Ļ</span>
      <span class="visible-lg-block">? �ڴ���Ļ������</span>
    </div>
</div>
<div class="row responsive-utilities-test hidden-on">
    <div class="col-xs-6">
      <span class="hidden-xs hidden-sm">��С��Ļ��С��Ļ</span>
      <span class="visible-xs-block visible-sm-block">? �ڳ�С��Ļ��С��Ļ������</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-md hidden-lg">�е���Ļ�ʹ���Ļ</span>
      <span class="visible-md-block visible-lg-block">? �� medium �� large ������</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
      <span class="hidden-xs hidden-md">��С��Ļ���е���Ļ</span>
      <span class="visible-xs-block visible-md-block">? �ڳ�С��Ļ���е���Ļ������</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-sm hidden-lg">С��Ļ�ʹ���Ļ</span>
      <span class="visible-sm-block visible-lg-block">? ��С��Ļ�ʹ���Ļ������</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
      <span class="hidden-xs hidden-lg">��С��Ļ�ʹ���Ļ</span>
      <span class="visible-xs-block visible-lg-block">? �ڳ�С��Ļ�ʹ���Ļ������</span>
    </div>
    <div class="col-xs-6">
      <span class="hidden-sm hidden-md">С��Ļ���е���Ļ</span>
      <span class="visible-sm-block visible-md-block">? ��С��Ļ���е���Ļ������</span>
    </div>
</div>


�ض��ı�
.text-overflow() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}




/*С��Ļ*/
@media (min-width: 768px) {
    .tab-h2{
        font-size:24px;
    }
    .tab-p{
        font-size: 16px;
    }
}

/*�е���Ļ*/
@media (min-width: 992px) {
    .tab-h2{
        font-size:27px;
    }
    .tab-p{
        font-size: 17px;
    }
}

/*����Ļ*/
@media (min-width: 1200px) {
    .tab-h2{
        font-size:30px;
    }
    .tab-p{
        font-size: 18px;
    }
}