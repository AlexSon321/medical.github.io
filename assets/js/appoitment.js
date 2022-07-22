let countries = document.querySelector("#servicesec");
let cities = document.querySelector("#doctors")

let data = {
    ps: ['Mithila Shrinivas Amin | On call (Eve)', 'Avi Sanghavi(Mon Wed Fri | 11am to 1pm)', 'Shivan Sanghavi(Mon Wed Fri | 11am to 1pm)'],
    ny: ['Vikas Bharti | On call', 'Amar Kulkarni | On call'],
    os: ['Jigar Patel(Mon Wed Fri | 12pm to 2pm)', 'Mayur Rabhadiya(Mon to Sat | 1pm to 3pm)', 'Mayur Dhabade(Mon to Sat | 1pm to 3pm)', 'Sanchin Mahajan(Mon to Sat | 8 pm to 9 pm)', 'Mohit Shetye(Mon, Wed, Fri | 4pm to 5pm', 'Ghaniuzzoa Asadi | On Call'],
    su: ['Abhijeet Sawant(Plastic Surgeon | On call)', 'Dhirendrakumar Patil(Plastic Surgeon | On call', 'Akshay Pednekar(Uro Suregeon | Mon to Sat | 3pm to 5pm', 'Sundram Pillai(Onco Surgeon | On call)', 'Aditya Mandake(Onco Surgeon | On call)', 'Khuzema S. Fatehi(Onco Surgeon | On call)', 'Sundram Pillai(Onco Surgeon | Wed, Fri | 11am to 1pm)'],
    ga: ['Vikas Pandey | On call'],
    pt: ['Girish Date(Mon & Fri | 11.30am to 12.30pm)'],
    dt: ['Supriya Sawant(Mon to Sat | 1pm to 4pm)', 'Omprakash Gajare(Mon to Sat | 9am to 11am)', 'Varsha Wagh(Mon to Sat | 10.30 to 12 noon)', 'Anita Mehta(Mon, Tue, Thu | 4pm to 6pm', 'Konica Nanda Bhadra(Mon to Sat | 5.30pm to 7pm)', 'Komal Navalkha(Mon to Sat | 7pm to 8pm)'],
    et: ['Archana S(Sat | 5pm to 6pm)', 'Abhijjet Khond(Sat | 5pm to 6pm)', 'Florida Sharin | On call'],
    oy: ['Dilip Shah(Mon to Sat | 10am to 12 noon)', 'Pratik Bhadra(Mon to Sat | 5.30pm to 7pm)', 'Sanjana Shigwan(Wed | 10am to 12 noon)'],
    og: ['Kiyv', 'Lutsk'],
    dm: ['Pallavi Rathi(Wed | 11am to 12 noon)', 'Gautam Varma | On call'],
    gt: ['Dimple Chudkar(Mon, Wed, Fri | 11am to 1pm)', 'Deepbhadra(Mon to Sat | 5pm to 6pm)', 'Rima Dhawale(Mon, Wed, Fri | 4pm to 5pm', 'Neelima Bhanushali(Mon to Sat | 8pm to 9.30pm)'],
    gm: ['Alka Deshpande(Tue & Sat | 1pm to 3pm)', 'Hrashal Joshi(Tue & Sat | 12pm to 2pm)', 'Nimesh Patel(Mon, Wed, Fri | 5pm to 6pm'],
    gy: ['Prasad Gole(Tue & Fri | 12pm to 2pm)', 'Mahesh Doshi(Wed & Fri | 11am to 12 noon)', 'Deodas Shah(Tue | 9 am to 12 noon)'],
    dy: ['Bhakti Adkar(Mon to Sat | 10am to 6pm)', 'Shilpa Bodele(Tue & Thu | 12 noon to 2pm)'],
    pr: ['Kunal Aher(Mon to Sat | 2pm to 6pm)', 'Dinesh Maurya(Mon to Sat | 11am to 1pm)'],
    cy: ['Aditya Dhawale(Mon, Wed, Fri | 6pm to 7pm)', 'Rakesh Trimale | On call'],
    ng: ['Sneh Shashank | On call', 'Pradeep Tiwari(Fri | 6pm to 8pm & Sun | 4pm to 7pm'],
}



countries.addEventListener('change', function () {
    let city = data[this.value]
    cities.length = 0;

    addOptions(cities, city)
})

function addOptions(select, arr) {
    for (let i = 0; i < arr.length; i++) {
        select.add(new Option(arr[i]))
    }
}
