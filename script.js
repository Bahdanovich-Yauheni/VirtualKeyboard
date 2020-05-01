'use strict'
let val = '';
let shiftCount = 0;
let capsCount = 0;
// const textarea = document.getElementById('textarea');
document.querySelector('body').innerHTML = `<div class="wrapper">

<div class="keyboard__textarea">
  <textarea class="keyboard__textarea_attr" id = "textarea"></textarea> 
</div><br>
<div class="keyboard">
    <div class="row row-1">
          <div class="key Backquote">
            <div class="rus hidden">
                <span class="norm">ё</span>
                <span class="pressShift hidden">Ё</span>
                <span class="pressCaps hidden">Ё</span>
                <span class="shiftCaps hidden">ё</span>
            </div>
            <div class="eng">
              <span class="norm">\`</span>
              <span class="pressShift hidden">~</span>
              <span class="pressCaps hidden">\`</span>
              <span class="shiftCaps hidden">~</span>
            </div>
        </div>
          <div class="key Digit1">
              <div class="rus hidden">
                  <span class="norm">1</span>
                  <span class="pressShift hidden">!</span>
                  <span class="pressCaps hidden">1</span>
                  <span class="shiftCaps hidden">!</span>
              </div>
              <div class="eng">
                  <span class="norm">1</span>
                  <span class="pressShift hidden">!</span>
                  <span class="pressCaps hidden">1</span>
                  <span class="shiftCaps hidden">!</span>
              </div>
          </div>
          <div class="key Digit2">
              <div class="rus hidden">
                  <span class="norm">2</span>
                  <span class="pressShift hidden">"</span>
                  <span class="pressCaps hidden">2</span>
                  <span class="shiftCaps hidden">"</span>
              </div>
              <div class="eng">
                <span class="norm">2</span>
                <span class="pressShift hidden">@</span>
                <span class="pressCaps hidden">2</span>
                <span class="shiftCaps hidden">@</span>
              </div>
         </div>
         <div class="key Digit3">
          <div class="rus hidden">
              <span class="norm">3</span>
              <span class="pressShift hidden">№</span>
              <span class="pressCaps hidden">3</span>
              <span class="shiftCaps hidden">№</span>
          </div>
          <div class="eng">
            <span class="norm">3</span>
            <span class="pressShift hidden">#</span>
            <span class="pressCaps hidden">3</span>
            <span class="shiftCaps hidden">#</span>
          </div>
         </div>
         <div class="key Digit4">
          <div class="rus hidden">
              <span class="norm">4</span>
              <span class="pressShift hidden">;</span>
              <span class="pressCaps hidden">4</span>
              <span class="shiftCaps hidden">;</span>
          </div>
          <div class="eng">
            <span class="norm">4</span>
            <span class="pressShift hidden">$</span>
            <span class="pressCaps hidden">4</span>
            <span class="shiftCaps hidden">$</span>
          </div>
         </div>
         <div class="key Digit5">
          <div class="rus hidden">
              <span class="norm">5</span>
              <span class="pressShift hidden">%</span>
              <span class="pressCaps hidden">5</span>
              <span class="shiftCaps hidden">%</span>
          </div>
          <div class="eng">
            <span class="norm">5</span>
            <span class="pressShift hidden">%</span>
            <span class="pressCaps hidden">5</span>
            <span class="shiftCaps hidden">%</span>
          </div>
         </div>
         <div class="key Digit6">
          <div class="rus hidden">
              <span class="norm">6</span>
              <span class="pressShift hidden">:</span>
              <span class="pressCaps hidden">6</span>
              <span class="shiftCaps hidden">:</span>
          </div>
          <div class="eng">
            <span class="norm">6</span>
            <span class="pressShift hidden">^</span>
            <span class="pressCaps hidden">6</span>
            <span class="shiftCaps hidden">^</span>
          </div>
         </div>
         <div class="key Digit7">
          <div class="rus hidden">
              <span class="norm">7</span>
              <span class="pressShift hidden">?</span>
              <span class="pressCaps hidden">7</span>
              <span class="shiftCaps hidden">?;</span>
          </div>
          <div class="eng">
            <span class="norm">7</span>
            <span class="pressShift hidden">&amp;</span>
            <span class="pressCaps hidden">7</span>
            <span class="shiftCaps hidden">&amp;</span>
          </div>
         </div>
         <div class="key Digit8">
          <div class="rus hidden">
              <span class="norm">8</span>
              <span class="pressShift hidden">*</span>
              <span class="pressCaps hidden">8</span>
              <span class="shiftCaps hidden">*</span>
          </div>
          <div class="eng">
            <span class="norm">8</span>
            <span class="pressShift hidden">*</span>
            <span class="pressCaps hidden">8</span>
            <span class="shiftCaps hidden">*</span>
          </div>
         </div>
         <div class="key Digit9">
          <div class="rus hidden">
              <span class="norm">9</span>
              <span class="pressShift hidden">(</span>
              <span class="pressCaps hidden">9</span>
              <span class="shiftCaps hidden">(</span>
          </div>
          <div class="eng">
            <span class="norm">9</span>
            <span class="pressShift hidden">(</span>
            <span class="pressCaps hidden">9</span>
            <span class="shiftCaps hidden">(</span>
          </div>
         </div>
         <div class="key Digit0">
          <div class="rus hidden">
              <span class="norm">0</span>
              <span class="pressShift hidden">)</span>
              <span class="pressCaps hidden">0</span>
              <span class="shiftCaps hidden">)</span>
          </div>
          <div class="eng">
            <span class="norm">0</span>
            <span class="pressShift hidden">)</span>
            <span class="pressCaps hidden">0</span>
            <span class="shiftCaps hidden">)</span>
          </div>
         </div>
         <div class="key Minus">
          <div class="rus hidden">
              <span class="norm">-</span>
              <span class="pressShift hidden">_</span>
              <span class="pressCaps hidden">-</span>
              <span class="shiftCaps hidden">_</span>
          </div>
          <div class="eng">
            <span class="norm">-</span>
            <span class="pressShift hidden">_</span>
            <span class="pressCaps hidden">-</span>
            <span class="shiftCaps hidden">_</span>
          </div>
         </div>
         <div class="key Equal">
          <div class="rus hidden">
              <span class="norm">=</span>
              <span class="pressShift hidden">+</span>
              <span class="pressCaps hidden">=</span>
              <span class="shiftCaps hidden">+</span>
          </div>
          <div class="eng">
            <span class="norm">=</span>
            <span class="pressShift hidden">+</span>
            <span class="pressCaps hidden">=</span>
            <span class="shiftCaps hidden">+</span>
          </div>
         </div>
         <div class="key functional Backspace">
          <div class="rus hidden">
              <span class="norm">Backspace</span>
              <span class="pressShift hidden">Backspace</span>
              <span class="pressCaps hidden">Backspace</span>
              <span class="shiftCaps hidden">Backspace</span>
          </div>
          <div class="eng">
            <span class="norm">Backspace</span>
            <span class="pressShift hidden">Backspace</span>
            <span class="pressCaps hidden">Backspace</span>
            <span class="shiftCaps hidden">Backspace</span>
          </div>
         </div>
      </div> <!--  конец row -->
      <div class="row row-2">
          <div class="key Tab inactive">
            <div class="rus hidden">
                <span class="norm">Tab</span>
                <span class="pressShift hidden">Tab</span>
                <span class="pressCaps hidden">Tab</span>
                <span class="shiftCaps hidden">Tab</span>
            </div>
            <div class="eng">
              <span class="norm">Tab</span>
              <span class="pressShift hidden">Tab</span>
              <span class="pressCaps hidden">Tab</span>
              <span class="shiftCaps hidden">Tab</span>
            </div>
        </div>
          <div class="key KeyQ">
              <div class="rus hidden">
                  <span class="norm">й</span>
                  <span class="pressShift hidden">Й</span>
                  <span class="pressCaps hidden">Й</span>
                  <span class="shiftCaps hidden">й</span>
              </div>
              <div class="eng">
                  <span class="norm">q</span>
                  <span class="pressShift hidden">Q</span>
                  <span class="pressCaps hidden">Q</span>
                  <span class="shiftCaps hidden">q</span>
              </div>
          </div>
          <div class="key KeyW">
              <div class="rus hidden">
                  <span class="norm">ц</span>
                  <span class="pressShift hidden">Ц</span>
                  <span class="pressCaps hidden">Ц</span>
                  <span class="shiftCaps hidden">ц</span>
              </div>
              <div class="eng">
                <span class="norm">w</span>
                <span class="pressShift hidden">W</span>
                <span class="pressCaps hidden">W</span>
                <span class="shiftCaps hidden">w</span>
              </div>
         </div>
         <div class="key KeyE">
          <div class="rus hidden">
              <span class="norm">у</span>
              <span class="pressShift hidden">У</span>
              <span class="pressCaps hidden">У</span>
              <span class="shiftCaps hidden">у</span>
          </div>
          <div class="eng">
            <span class="norm">e</span>
            <span class="pressShift hidden">E</span>
            <span class="pressCaps hidden">E</span>
            <span class="shiftCaps hidden">e</span>
          </div>
         </div>
         <div class="key KeyR">
          <div class="rus hidden">
              <span class="norm">к</span>
              <span class="pressShift hidden">К</span>
              <span class="pressCaps hidden">К</span>
              <span class="shiftCaps hidden">к</span>
          </div>
          <div class="eng">
            <span class="norm">r</span>
            <span class="pressShift hidden">R</span>
            <span class="pressCaps hidden">R</span>
            <span class="shiftCaps hidden">r</span>
          </div>
         </div>
         <div class="key KeyT">
          <div class="rus hidden">
              <span class="norm">е</span>
              <span class="pressShift hidden">Е</span>
              <span class="pressCaps hidden">Е</span>
              <span class="shiftCaps hidden">е</span>
          </div>
          <div class="eng">
            <span class="norm">t</span>
            <span class="pressShift hidden">T</span>
            <span class="pressCaps hidden">T</span>
            <span class="shiftCaps hidden">t</span>
          </div>
         </div>
         <div class="key KeyY">
          <div class="rus hidden">
              <span class="norm">н</span>
              <span class="pressShift hidden">Н</span>
              <span class="pressCaps hidden">Н</span>
              <span class="shiftCaps hidden">н</span>
          </div>
          <div class="eng">
            <span class="norm">y</span>
            <span class="pressShift hidden">Y</span>
            <span class="pressCaps hidden">Y</span>
            <span class="shiftCaps hidden">y</span>
          </div>
         </div>
         <div class="key KeyU">
          <div class="rus hidden">
              <span class="norm">г</span>
              <span class="pressShift hidden">Г</span>
              <span class="pressCaps hidden">Г</span>
              <span class="shiftCaps hidden">г;</span>
          </div>
          <div class="eng">
            <span class="norm">u</span>
            <span class="pressShift hidden">U</span>
            <span class="pressCaps hidden">U</span>
            <span class="shiftCaps hidden">u</span>
          </div>
         </div>
         <div class="key KeyI">
          <div class="rus hidden">
              <span class="norm">ш</span>
              <span class="pressShift hidden">Ш</span>
              <span class="pressCaps hidden">Ш</span>
              <span class="shiftCaps hidden">ш</span>
          </div>
          <div class="eng">
            <span class="norm">i</span>
            <span class="pressShift hidden">I</span>
            <span class="pressCaps hidden">I</span>
            <span class="shiftCaps hidden">i</span>
          </div>
         </div>
         <div class="key KeyO">
          <div class="rus hidden">
              <span class="norm">щ</span>
              <span class="pressShift hidden">Щ</span>
              <span class="pressCaps hidden">Щ</span>
              <span class="shiftCaps hidden">ш</span>
          </div>
          <div class="eng">
            <span class="norm">o</span>
            <span class="pressShift hidden">O</span>
            <span class="pressCaps hidden">O</span>
            <span class="shiftCaps hidden">o</span>
          </div>
         </div>
         <div class="key KeyP">
          <div class="rus hidden">
              <span class="norm">з</span>
              <span class="pressShift hidden">З</span>
              <span class="pressCaps hidden">З</span>
              <span class="shiftCaps hidden">з</span>
          </div>
          <div class="eng">
            <span class="norm">p</span>
            <span class="pressShift hidden">P</span>
            <span class="pressCaps hidden">P</span>
            <span class="shiftCaps hidden">p</span>
          </div>
         </div>
         <div class="key BracketLeft">
          <div class="rus hidden">
              <span class="norm">х</span>
              <span class="pressShift hidden">Х</span>
              <span class="pressCaps hidden">Х</span>
              <span class="shiftCaps hidden">х</span>
          </div>
          <div class="eng">
            <span class="norm">[</span>
            <span class="pressShift hidden">{</span>
            <span class="pressCaps hidden">{</span>
            <span class="shiftCaps hidden">[</span>
          </div>
         </div>
         <div class="key BracketRight">
          <div class="rus hidden">
              <span class="norm">ъ</span>
              <span class="pressShift hidden">Ъ</span>
              <span class="pressCaps hidden">Ъ</span>
              <span class="shiftCaps hidden">ъ</span>
          </div>
          <div class="eng">
            <span class="norm">]</span>
            <span class="pressShift hidden">}</span>
            <span class="pressCaps hidden">}</span>
            <span class="shiftCaps hidden">]</span>
          </div>
         </div>
         <div class="key Backslash">
          <div class="rus hidden">
              <span class="norm">\\</span>
              <span class="pressShift hidden">/</span>
              <span class="pressCaps hidden">\\</span>
              <span class="shiftCaps hidden">/</span>
          </div>
          <div class="eng">
            <span class="norm">\\</span>
            <span class="pressShift hidden">|</span>
            <span class="pressCaps hidden">\\</span>
            <span class="shiftCaps hidden">|</span>
          </div>
         </div>
         <div class="key Delete functional">
          <div class="rus hidden">
              <span class="norm">Del</span>
              <span class="pressShift hidden">Del</span>
              <span class="pressCaps hidden">Del</span>
              <span class="shiftCaps hidden">Del</span>
          </div>
          <div class="eng">
            <span class="norm">Del</span>
            <span class="pressShift hidden">Del</span>
            <span class="pressCaps hidden">Del</span>
            <span class="shiftCaps hidden">Del</span>
          </div>
         </div>
      </div> <!--  конец row -->
      <div class="row row-3">
          <div class="key CapsLock functional inactive">
            <div class="rus hidden">
                <span class="norm">CapsLock</span>
                <span class="pressShift hidden">CapsLock</span>
                <span class="pressCaps hidden">CapsLock</span>
                <span class="shiftCaps hidden">CapsLock</span>
            </div>
            <div class="eng">
              <span class="norm">CapsLock</span>
              <span class="pressShift hidden">CapsLock</span>
              <span class="pressCaps hidden">CapsLock</span>
              <span class="shiftCaps hidden">CapsLock</span>
            </div>
        </div>
          <div class="key KeyA">
              <div class="rus hidden">
                  <span class="norm">ф</span>
                  <span class="pressShift hidden">Ф</span>
                  <span class="pressCaps hidden">Ф</span>
                  <span class="shiftCaps hidden">ф</span>
              </div>
              <div class="eng">
                  <span class="norm">a</span>
                  <span class="pressShift hidden">A</span>
                  <span class="pressCaps hidden">A</span>
                  <span class="shiftCaps hidden">a</span>
              </div>
          </div>
          <div class="key KeyS">
              <div class="rus hidden">
                  <span class="norm">ы</span>
                  <span class="pressShift hidden">Ы</span>
                  <span class="pressCaps hidden">Ы</span>
                  <span class="shiftCaps hidden">ы</span>
              </div>
              <div class="eng">
                <span class="norm">s</span>
                <span class="pressShift hidden">S</span>
                <span class="pressCaps hidden">S</span>
                <span class="shiftCaps hidden">s</span>
              </div>
         </div>
         <div class="key KeyD">
          <div class="rus hidden">
              <span class="norm">в</span>
              <span class="pressShift hidden">В</span>
              <span class="pressCaps hidden">В</span>
              <span class="shiftCaps hidden">в</span>
          </div>
          <div class="eng">
            <span class="norm">d</span>
            <span class="pressShift hidden">D</span>
            <span class="pressCaps hidden">D</span>
            <span class="shiftCaps hidden">d</span>
          </div>
         </div>
         <div class="key KeyF">
          <div class="rus hidden">
              <span class="norm">а</span>
              <span class="pressShift hidden">А</span>
              <span class="pressCaps hidden">А</span>
              <span class="shiftCaps hidden">а</span>
          </div>
          <div class="eng">
            <span class="norm">f</span>
            <span class="pressShift hidden">F</span>
            <span class="pressCaps hidden">F</span>
            <span class="shiftCaps hidden">f</span>
          </div>
         </div>
         <div class="key KeyG">
          <div class="rus hidden">
              <span class="norm">п</span>
              <span class="pressShift hidden">П</span>
              <span class="pressCaps hidden">П</span>
              <span class="shiftCaps hidden">п</span>
          </div>
          <div class="eng">
            <span class="norm">g</span>
            <span class="pressShift hidden">G</span>
            <span class="pressCaps hidden">G</span>
            <span class="shiftCaps hidden">g</span>
          </div>
         </div>
         <div class="key KeyH">
          <div class="rus hidden">
              <span class="norm">р</span>
              <span class="pressShift hidden">Р</span>
              <span class="pressCaps hidden">Р</span>
              <span class="shiftCaps hidden">р</span>
          </div>
          <div class="eng">
            <span class="norm">h</span>
            <span class="pressShift hidden">H</span>
            <span class="pressCaps hidden">H</span>
            <span class="shiftCaps hidden">h</span>
          </div>
         </div>
         <div class="key KeyJ">
          <div class="rus hidden">
              <span class="norm">о</span>
              <span class="pressShift hidden">О</span>
              <span class="pressCaps hidden">О</span>
              <span class="shiftCaps hidden">о;</span>
          </div>
          <div class="eng">
            <span class="norm">j</span>
            <span class="pressShift hidden">J</span>
            <span class="pressCaps hidden">J</span>
            <span class="shiftCaps hidden">j</span>
          </div>
         </div>
         <div class="key KeyK">
          <div class="rus hidden">
              <span class="norm">л</span>
              <span class="pressShift hidden">Л</span>
              <span class="pressCaps hidden">Л</span>
              <span class="shiftCaps hidden">л</span>
          </div>
          <div class="eng">
            <span class="norm">k</span>
            <span class="pressShift hidden">K</span>
            <span class="pressCaps hidden">K</span>
            <span class="shiftCaps hidden">k</span>
          </div>
         </div>
         <div class="key KeyL">
          <div class="rus hidden">
              <span class="norm">д</span>
              <span class="pressShift hidden">Д</span>
              <span class="pressCaps hidden">Д</span>
              <span class="shiftCaps hidden">д</span>
          </div>
          <div class="eng">
            <span class="norm">l</span>
            <span class="pressShift hidden">L</span>
            <span class="pressCaps hidden">L</span>
            <span class="shiftCaps hidden">l</span>
          </div>
         </div>
         <div class="key Semicolon">
          <div class="rus hidden">
              <span class="norm">ж</span>
              <span class="pressShift hidden">Ж</span>
              <span class="pressCaps hidden">Ж</span>
              <span class="shiftCaps hidden">ж</span>
          </div>
          <div class="eng">
            <span class="norm">;</span>
            <span class="pressShift hidden">:</span>
            <span class="pressCaps hidden">;</span>
            <span class="shiftCaps hidden">:</span>
          </div>
         </div>
         <div class="key Quote">
          <div class="rus hidden">
              <span class="norm">э</span>
              <span class="pressShift hidden">Э</span>
              <span class="pressCaps hidden">Э</span>
              <span class="shiftCaps hidden">э</span>
          </div>
          <div class="eng">
            <span class="norm">'</span>
            <span class="pressShift hidden">"</span>
            <span class="pressCaps hidden">'</span>
            <span class="shiftCaps hidden">"</span>
          </div>
         </div>
         <div class="key Enter">
          <div class="rus hidden">
              <span class="norm">Enter</span>
              <span class="pressShift hidden">Enter</span>
              <span class="pressCaps hidden">Enter</span>
              <span class="shiftCaps hidden">Enter</span>
          </div>
          <div class="eng">
            <span class="norm">Enter</span>
            <span class="pressShift hidden">Enter</span>
            <span class="pressCaps hidden">Enter</span>
            <span class="shiftCaps hidden">Enter</span>
          </div>
         </div>
      </div> <!--  конец row -->
      <div class="row row-4">
          <div class="key ShiftLeft functional inactive">
            <div class="rus hidden">
                <span class="norm">Shift</span>
                <span class="pressShift hidden">Shift</span>
                <span class="pressCaps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </div>
            <div class="eng">
              <span class="norm">Shift</span>
              <span class="pressShift hidden">Shift</span>
              <span class="pressCaps hidden">Shift</span>
              <span class="shiftCaps hidden">Shift</span>
            </div>
        </div>
          <div class="key KeyZ">
              <div class="rus hidden">
                  <span class="norm">я</span>
                  <span class="pressShift hidden">Я</span>
                  <span class="pressCaps hidden">Я</span>
                  <span class="shiftCaps hidden">я</span>
              </div>
              <div class="eng">
                  <span class="norm">z</span>
                  <span class="pressShift hidden">Z</span>
                  <span class="pressCaps hidden">Z</span>
                  <span class="shiftCaps hidden">z</span>
              </div>
          </div>
          <div class="key KeyX">
              <div class="rus hidden">
                  <span class="norm">ч</span>
                  <span class="pressShift hidden">Ч</span>
                  <span class="pressCaps hidden">Ч</span>
                  <span class="shiftCaps hidden">ч</span>
              </div>
              <div class="eng">
                <span class="norm">x</span>
                <span class="pressShift hidden">X</span>
                <span class="pressCaps hidden">X</span>
                <span class="shiftCaps hidden">x</span>
              </div>
         </div>
         <div class="key KeyC">
          <div class="rus hidden">
              <span class="norm">c</span>
              <span class="pressShift hidden">C</span>
              <span class="pressCaps hidden">C</span>
              <span class="shiftCaps hidden">c</span>
          </div>
          <div class="eng">
            <span class="norm">с</span>
            <span class="pressShift hidden">С</span>
            <span class="pressCaps hidden">С</span>
            <span class="shiftCaps hidden">с</span>
          </div>
         </div>
         <div class="key KeyV">
          <div class="rus hidden">
              <span class="norm">м</span>
              <span class="pressShift hidden">М</span>
              <span class="pressCaps hidden">М</span>
              <span class="shiftCaps hidden">м</span>
          </div>
          <div class="eng">
            <span class="norm">v</span>
            <span class="pressShift hidden">V</span>
            <span class="pressCaps hidden">V</span>
            <span class="shiftCaps hidden">v</span>
          </div>
         </div>
         <div class="key KeyB">
          <div class="rus hidden">
              <span class="norm">и</span>
              <span class="pressShift hidden">И</span>
              <span class="pressCaps hidden">И</span>
              <span class="shiftCaps hidden">и</span>
          </div>
          <div class="eng">
            <span class="norm">b</span>
            <span class="pressShift hidden">B</span>
            <span class="pressCaps hidden">B</span>
            <span class="shiftCaps hidden">b</span>
          </div>
         </div>
         <div class="key KeyN">
          <div class="rus hidden">
              <span class="norm">т</span>
              <span class="pressShift hidden">Т</span>
              <span class="pressCaps hidden">Т</span>
              <span class="shiftCaps hidden">т</span>
          </div>
          <div class="eng">
            <span class="norm">n</span>
            <span class="pressShift hidden">N</span>
            <span class="pressCaps hidden">N</span>
            <span class="shiftCaps hidden">n</span>
          </div>
         </div>
         <div class="key KeyM">
          <div class="rus hidden">
              <span class="norm">ь</span>
              <span class="pressShift hidden">Ь</span>
              <span class="pressCaps hidden">Ь</span>
              <span class="shiftCaps hidden">ь;</span>
          </div>
          <div class="eng">
            <span class="norm">m</span>
            <span class="pressShift hidden">M</span>
            <span class="pressCaps hidden">M</span>
            <span class="shiftCaps hidden">m</span>
          </div>
         </div>
         <div class="key Comma">
          <div class="rus hidden">
              <span class="norm">б</span>
              <span class="pressShift hidden">Б</span>
              <span class="pressCaps hidden">Б</span>
              <span class="shiftCaps hidden">б</span>
          </div>
          <div class="eng">
            <span class="norm">,</span>
            <span class="pressShift hidden">\<</span>
            <span class="pressCaps hidden">,</span>
            <span class="shiftCaps hidden">\<</span>
          </div>
         </div>
         <div class="key Period">
          <div class="rus hidden">
              <span class="norm">ю</span>
              <span class="pressShift hidden">Ю</span>
              <span class="pressCaps hidden">Ю</span>
              <span class="shiftCaps hidden">ю</span>
          </div>
          <div class="eng">
            <span class="norm">.</span>
            <span class="pressShift hidden">\></span>
            <span class="pressCaps hidden">.</span>
            <span class="shiftCaps hidden">\></span>
          </div>
         </div>
         <div class="key Slash">
          <div class="rus hidden">
              <span class="norm">.</span>
              <span class="pressShift hidden">,</span>
              <span class="pressCaps hidden">.</span>
              <span class="shiftCaps hidden">,</span>
          </div>
          <div class="eng">
            <span class="norm">/</span>
            <span class="pressShift hidden">?</span>
            <span class="pressCaps hidden">/</span>
            <span class="shiftCaps hidden">?</span>
          </div>
         </div>
         <div class="key ArrowUp">
          <div class="rus hidden">
              <span class="norm">↑</span>
              <span class="pressShift hidden">↑</span>
              <span class="pressCaps hidden">↑</span>
              <span class="shiftCaps hidden">↑</span>
          </div>
          <div class="eng">
            <span class="norm">↑</span>
            <span class="pressShift hidden">↑</span>
            <span class="pressCaps hidden">↑</span>
            <span class="shiftCaps hidden">↑</span>
          </div>
         </div>
         <div class="key ShiftRight functional inactive">
          <div class="rus hidden">
              <span class="norm">Shift</span>
              <span class="pressShift hidden">Shift</span>
              <span class="pressCaps hidden">Shift</span>
              <span class="shiftCaps hidden">Shift</span>
          </div>
          <div class="eng">
            <span class="norm">Shift</span>
            <span class="pressShift hidden">Shift</span>
            <span class="pressCaps hidden">Shift</span>
            <span class="shiftCaps hidden">Shift</span>
          </div>
         </div>
      </div> <!--  конец row -->
      <div class="row row-5">
          <div class="key ControlLeft functional">
            <div class="rus hidden">
                <span class="norm">Ctrl</span>
                <span class="pressShift hidden">Ctrl</span>
                <span class="pressCaps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </div>
            <div class="eng">
              <span class="norm">Ctrl</span>
              <span class="pressShift hidden">Ctrl</span>
              <span class="pressCaps hidden">Ctrl</span>
              <span class="shiftCaps hidden">Ctrl</span>
            </div>
        </div>
          <div class="key MetaLeft functional">
              <div class="rus hidden">
                  <span class="norm">Win</span>
                  <span class="pressShift hidden">Win</span>
                  <span class="pressCaps hidden">Win</span>
                  <span class="shiftCaps hidden">Win</span>
              </div>
              <div class="eng">
                  <span class="norm">Win</span>
                  <span class="pressShift hidden">Win</span>
                  <span class="pressCaps hidden">Win</span>
                  <span class="shiftCaps hidden">Win</span>
              </div>
          </div>
          <div class="key AltLeft functional inactive">
              <div class="rus hidden">
                  <span class="norm">Alt</span>
                  <span class="pressShift hidden">Alt</span>
                  <span class="pressCaps hidden">Alt</span>
                  <span class="shiftCaps hidden">Alt</span>
              </div>
              <div class="eng">
                <span class="norm">Alt</span>
                <span class="pressShift hidden">Alt</span>
                <span class="pressCaps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
              </div>
         </div>
         <div class="key Space">
          <div class="rus hidden">
              <span class="norm"> </span>
              <span class="pressShift hidden"> </span>
              <span class="pressCaps hidden"> </span>
              <span class="shiftCaps hidden"> </span>
          </div>
          <div class="eng">
            <span class="norm"> </span>
            <span class="pressShift hidden"> </span>
            <span class="pressCaps hidden"> </span>
            <span class="shiftCaps hidden"> </span>
          </div>
         </div>
         <div class="key AltRight functional">
          <div class="rus hidden">
              <span class="norm">Alt</span>
              <span class="pressShift hidden">Alt</span>
              <span class="pressCaps hidden">Alt</span>
              <span class="shiftCaps hidden">Alt</span>
          </div>
          <div class="eng">
            <span class="norm">Alt</span>
            <span class="pressShift hidden">Alt</span>
            <span class="pressCaps hidden">Alt</span>
            <span class="shiftCaps hidden">Alt</span>
          </div>
         </div>
         <div class="key ArrowLeft">
          <div class="rus hidden">
              <span class="norm">←</span>
              <span class="pressShift hidden">←</span>
              <span class="pressCaps hidden">←</span>
              <span class="shiftCaps hidden">←</span>
          </div>
          <div class="eng">
            <span class="norm">←</span>
            <span class="pressShift hidden">←</span>
            <span class="pressCaps hidden">←</span>
            <span class="shiftCaps hidden">←</span>
          </div>
         </div>
         <div class="key ArrowDown">
          <div class="rus hidden">
              <span class="norm">↓</span>
              <span class="pressShift hidden">↓</span>
              <span class="pressCaps hidden">↓</span>
              <span class="shiftCaps hidden">↓</span>
          </div>
          <div class="eng">
            <span class="norm">↓</span>
            <span class="pressShift hidden">↓</span>
            <span class="pressCaps hidden">↓</span>
            <span class="shiftCaps hidden">↓</span>
          </div>
         </div>
         <div class="key ArrowRight">
          <div class="rus hidden">
              <span class="norm">→</span>
              <span class="pressShift hidden">→</span>
              <span class="pressCaps hidden">→</span>
              <span class="shiftCaps hidden">→;</span>
          </div>
          <div class="eng">
            <span class="norm">→</span>
            <span class="pressShift hidden">→</span>
            <span class="pressCaps hidden">→</span>
            <span class="shiftCaps hidden">→</span>
          </div>
         </div>
         <div class="key ControlRight functional lang">
          <div class="rus hidden">
              <span class="norm">Ctrl</span>
              <span class="pressShift hidden">Ctrl</span>
              <span class="pressCaps hidden">Ctrl</span>
              <span class="shiftCaps hidden">Ctrl</span>
          </div>
          <div class="eng">
            <span class="norm">Ctrl</span>
            <span class="pressShift hidden">Ctrl</span>
            <span class="pressCaps hidden">Ctrl</span>
            <span class="shiftCaps hidden">Ctrl</span>
          </div>
         </div>
       </div> <!--  конец row -->
  </div> <!--  конец keyboard -->
  <br>
<p>Клавиатура сделана в ОС Windows</p>
<p>Для переключения языка используется правый Ctrl</p>
</div>
`;
let curPos = 0;
const defaultLang = 0;
let lang = localStorage.getItem('lang') || defaultLang;
console.log(lang);
lang--;
changeLang();
document.querySelectorAll('.eng').forEach(el => {
    if(el.classList.contains('hidden')){
        document.querySelectorAll('.eng > span').forEach(el => el.classList.add('hidden'))
    }
})
document.querySelectorAll('.rus').forEach(el => {
    if(el.classList.contains('hidden')){
        document.querySelectorAll('.rus > span').forEach(el => el.classList.add('hidden'))
    }
})



document.querySelectorAll('.keyboard')[0].addEventListener('mousedown', (event) => {
    val = '';
    let divKey;    
    if(event.target.querySelectorAll('span').length != 0){
        event.target.querySelectorAll('span').forEach(el =>{ if (el.classList.contains('hidden') == false){
            val = el.innerHTML;
            divKey = event.target.parentNode;
        }});

    }
    else{val = event.target.innerHTML;
        divKey = event.target.parentNode.parentNode;}
    // if (val == 'Tab'){val = '    ';};
    // if (val == 'Enter'){val = '\n'};
    // let text = document.querySelector('.keyboard__textarea_attr').value;
    // document.querySelector('.keyboard__textarea_attr').value = text + val;
    // document.querySelectorAll('.key').forEach(el => el.classList.remove('active'))
    divKey.classList.remove('inactive');
    divKey.classList.add('active');
    if(divKey.classList.contains('keyboard')){divKey.classList.remove('active')}
    if(divKey.classList.contains('lang')){changeLang()}
    inputToTextarea(divKey, val);
})

document.querySelectorAll('.keyboard')[0].addEventListener('mouseup', (event) => {
    let divKey;    
    if(event.target.querySelectorAll('span').length != 0){
        event.target.querySelectorAll('span').forEach(el =>{ if (el.classList.contains('hidden') == false){
            divKey = event.target.parentNode;
        }});

    }
    else{val = event.target.innerHTML;
        divKey = event.target.parentNode.parentNode;}
    divKey.classList.remove('active');
    divKey.classList.add('inactive');
    if(divKey.classList.contains('keyboard')){divKey.classList.remove('inactive')}
}
)


document.onkeydown = function (event) {
    event.preventDefault();
    let divKey;
    let val;

    document.getElementsByClassName(event.code)[0].classList.add('active');
    document.getElementsByClassName(event.code)[0].classList.remove('inactive');
    document.getElementsByClassName(event.code)[0].querySelectorAll('span').forEach(el =>{ 
        if (el.classList.contains('hidden') == false){
        divKey = el.parentNode.parentNode;
        val = el.innerHTML;
        console.log(val);
       
        }})
        if(divKey.classList.contains('lang')){changeLang()}
        inputToTextarea(divKey, val)
    
    }

document.onkeyup = function (event) {
    document.getElementsByClassName(event.code)[0].classList.remove('active');
    document.getElementsByClassName(event.code)[0].classList.add('inactive');
}

function inputToTextarea(div, val){
    let text = document.querySelector('.keyboard__textarea_attr').value;
    if(div.classList.contains('functional') == false){
        if(val == 'Tab'){val = '    '}
        if(val == '&gt;'){val = '>'}
        if(val == '&lt;'){val = '<'}
        if(val == 'Enter'){val = '\n'}
        

        
    }
    else{
        if(val == 'Alt' || val == 'Ctrl'){val = ''}
                    //--------------обработчик delete и backspace
                    if (val == 'Backspace' || val == 'Del'){
                        console.log(val);
                        let str1 = document.getElementById('textarea').value.substring(0, document.getElementById('textarea').selectionStart);
                        let str2 = document.getElementById('textarea').value.substring(document.getElementById('textarea').selectionStart);                        
                        if(document.getElementById('textarea').selectionStart == document.getElementById('textarea').selectionEnd){
                            if (val == 'Backspace'){                              
                                str1 = str1.substring(0, str1.length-1);
                                curPos = document.getElementById('textarea').selectionStart - 1;
                            }
                            else{
                                str2 = str2.substring(1, str1.length);
                                curPos = document.getElementById('textarea').selectionStart;
                            }
                        }
                        text = str1+str2
                        val = '';
                        
                    }

    }
    
    //----------обработчик Shift----------------------
    if(val == 'Shift'){
        shiftCount++;
        if(shiftCount%2 == 1){
            document.querySelectorAll('span').forEach(el => {
                el.classList.add('hidden')
                if(el.classList.contains('pressShift')){
                    el.classList.remove('hidden')}}
                )
        }
        else{
            document.querySelectorAll('span').forEach(el => {
                el.classList.add('hidden')
                if(el.classList.contains('norm')){
                    el.classList.remove('hidden')}}
                )
        }
        document.querySelectorAll('.eng').forEach(el => {
            if(el.classList.contains('hidden')){
                document.querySelectorAll('.eng > span').forEach(el => el.classList.add('hidden'))
            }
        })
        document.querySelectorAll('.rus').forEach(el => {
            if(el.classList.contains('hidden')){
                document.querySelectorAll('.rus > span').forEach(el => el.classList.add('hidden'))
            }
        })
        val = '';
    }
    //----------------обработчик CapsLock----------------
    if(val == 'CapsLock'){
        capsCount++;
        if(capsCount%2 == 1){
            document.querySelectorAll('span').forEach(el => {
                el.classList.add('hidden')
                if(el.classList.contains('pressCaps')){
                    el.classList.remove('hidden')}}
                )
        }
        else{
            document.querySelectorAll('span').forEach(el => {
                el.classList.add('hidden')
                if(el.classList.contains('norm')){
                    el.classList.remove('hidden')}}
                )
        }
        document.querySelectorAll('.eng').forEach(el => {
            if(el.classList.contains('hidden')){
                document.querySelectorAll('.eng > span').forEach(el => el.classList.add('hidden'))
            }
        })
        document.querySelectorAll('.rus').forEach(el => {
            if(el.classList.contains('hidden')){
                document.querySelectorAll('.rus > span').forEach(el => el.classList.add('hidden'))
            }
        })
        val = '';
    }
    if(capsCount%2 == 1 && shiftCount%2 == 1){
        document.querySelectorAll('span').forEach(el => {
        el.classList.add('hidden')
        if(el.classList.contains('shiftCaps')){
        el.classList.remove('hidden')}}
            )
            document.querySelectorAll('.eng').forEach(el => {
                if(el.classList.contains('hidden')){
                    document.querySelectorAll('.eng > span').forEach(el => el.classList.add('hidden'))
                }
            })
            document.querySelectorAll('.rus').forEach(el => {
                if(el.classList.contains('hidden')){
                    document.querySelectorAll('.rus > span').forEach(el => el.classList.add('hidden'))
                }
            })
    }


    // let text = document.querySelector('.keyboard__textarea_attr').value;
    // document.querySelector('.keyboard__textarea_attr').value = text + val;
    document.querySelector('.keyboard__textarea_attr').value = text + val;
    document.getElementById('textarea').setSelectionRange(curPos, curPos);
}

function changeLang(){
    lang++;
    localStorage.setItem('lang', lang);
    console.log(localStorage.getItem('lang'));    
    if(lang%2 == 0){
        document.querySelectorAll('.rus').forEach(el => el.classList.add('hidden'))
        document.querySelectorAll('.rus > span').forEach(el => el.classList.add('hidden'))
        document.querySelectorAll('.eng').forEach(el => el.classList.remove('hidden'))
        document.querySelectorAll('.eng > .norm').forEach(el => el.classList.remove('hidden'))
    }
    else{
        document.querySelectorAll('.eng').forEach(el => el.classList.add('hidden'))
        document.querySelectorAll('.eng > span').forEach(el => el.classList.add('hidden'))
        document.querySelectorAll('.rus').forEach(el => el.classList.remove('hidden'))
        document.querySelectorAll('.rus > .norm').forEach(el => el.classList.remove('hidden'))
    }
}

