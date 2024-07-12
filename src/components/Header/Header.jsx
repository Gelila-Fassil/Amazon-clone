import './header.css'
const Header = () => {
  return (
    <section>
      <section>
        <div>
            {/* logo */}
          <a href="">
            <img
              src="../../assets/Search PNG images_ amazon_files"
              alt="amazon logo"
            />
          </a>
          {/* delivery  */}
          <span>
            {/* icon */}
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
            {/* search */}
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" name="" id='' placeholder='search product' />
            {/* icon */}

        </div>
        {/* rignt side link */}
        <div>
            <div>
                <img src="" alt="" />
              <section>
                <option value="">EN</option>
              </section>



            </div>
        </div>
      </section>
    </section>
  );
}

export default Header

