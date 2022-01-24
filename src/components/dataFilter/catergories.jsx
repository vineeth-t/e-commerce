import { useDataFilter } from "../../contexts/index";
export function Catergories({ showtheFilter, setTheFilter }) {
  const {
    state: { toggleInventory, showJCAssured },
    dispatch,
  } = useDataFilter();
  return (
    <>
      <div className="filterCard-heading">
        <h3>Filters</h3>
        {showtheFilter === "filter-card" && (
          <button
            style={{ backgroundColor: "inherit" }}
            onClick={() => setTheFilter("")}
          >
            X
          </button>
        )}
      </div>
      {/* <div className='filterCard-radio-btn'>
        <h4>Categories</h4>
         <label>
             <input type ='checkbox'/>
                Phones
        </label>
        <label>
             <input type ='checkbox' />
               Cameras
        </label>
        <label>
             <input type ='checkbox' />
               Tshirts
        </label>
        <label>
             <input type ='checkbox' />
               Tabs
        </label>
        <label>
             <input type ='checkbox' />
               EarPhones
        </label>
    </div>
    <div className='filterCard-radio-btn'>
        <h4>Brands</h4>
         <label>
             <input type ='checkbox'/>
                Apple
        </label>
        <label>
             <input type ='checkbox' />
               Google
        </label>
        <label>
             <input type ='checkbox' />
               Samsung
        </label>
        <label>
             <input type ='checkbox' />
               Marvel Tshirts
        </label>
        <label>
             <input type ='checkbox' />
               Jbl
        </label>
    </div> */}
      <div className="filterCard-radio-btn">
        <h4>Others</h4>
        <label>
          <input
            type="checkbox"
            checked={showJCAssured}
            onChange={() => dispatch({ type: "FAST_DELIVERY" })}
          />
          Fast Delivery
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggleInventory}
            onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          Include Out Of Stock
        </label>
      </div>
    </>
  );
}
