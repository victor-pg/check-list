import React,{useState} from "react";
import {
  Input,
  NavList,
  NavListItem,
  Layout,
  LayoutSection,
  Dropdown,
  Card,
  Icon,
  Tag,
  TypographyTitle,
  TypographyText,
  Switch,
  Divider,
  Select,
  SelectOption,
  DatePicker,
  Space
} from "@brizy/ui";
import {PlusCircle,CalendarFilled,Customers,CustomerDetails,CheckSmall} from '@brizy/ui-icons';
import "./CustomersAdd.css"

const CustomersAdd: React.FC = () => {

    const [tags,setTags] = useState<string[]>(['Basic','VIP','PRO Plan'])
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        gender:'male',
        birthday:'01/01/2019',
        adress:'',
        city:'bucharest',
        country:'romania',
        checked:false
    })

    const handleAdd=(tagName:string)=>{
        const candidate = tags.includes(tagName);
        if(candidate){
            const newTags = tags.filter(tag => tag !== tagName)
            setTags(newTags);
            console.log('When exists : '); console.log(tags);
        }else{
            const newTags = [...tags,tagName];
            setTags(newTags);
            console.log('After add : '); console.log(tags);
        }
    }

    const handleDelete=(tag:string)=>{
        const newTags = tags.filter(oldTag=>oldTag!==tag)
        setTags(newTags)
    }


    const dropdownContent=()=>{
        return(
            <Card>
        <Dropdown.Item onClick={()=>handleAdd('Basic')} >
          {tags.includes('Basic') ? (
              <>
              <span>Basic</span><span><Icon source={CheckSmall} color="blue" size="12px"/></span>
              </>
          ) : <span>Basic</span> }
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>handleAdd('VIP')}>
        {tags.includes('VIP') ? (
              <>
              <span>VIP</span><span><Icon source={CheckSmall} color="blue" size="12px"/></span>
              </>
          ) : <span>VIP</span> }
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>handleAdd('PRO Plan')}>
        {tags.includes('PRO Plan') ? (
              <>
              <span>PRO Plan</span><span><Icon source={CheckSmall} color="blue" size="12px"/></span>
              </>
          ) : <span>PRO Plan</span> }
        </Dropdown.Item>    
      </Card>
        );
    }

    

  return (
    <>
      <Layout>
        <LayoutSection>
          <NavList active="profile">
            <NavListItem itemId="profile">PROFILE</NavListItem>
          </NavList>
        </LayoutSection>
      </Layout>

    <Space spacing={[0, 0, 'small',0]} ></Space>

      <Layout gutter={[30, 28]} alignY="center">
        <LayoutSection span={8}>

            <Layout alignY="center">
                <LayoutSection span={8}>
                    <Input.Item label="First Name">
                        <Input.Text placeholder="Enter first name" size="large"  value={formData.firstName} onChange={e=>setFormData({...formData,firstName:e})}/>
                    </Input.Item>
                </LayoutSection>
                <LayoutSection span={8}>
                    <Input.Item label="Last Name">
                        <Input.Text placeholder="Enter last name" size="large" value={formData.lastName} onChange={e=>setFormData({...formData,lastName:e})}/>
                    </Input.Item>
                </LayoutSection>
            </Layout>

            <Layout alignY="center">
            <LayoutSection span={8}>
                    <Input.Item label="Email Address">
                        <Input.Text placeholder="Enter email" size="large" value={formData.email} onChange={e=>setFormData({...formData,email:e})}/>
                    </Input.Item>
                </LayoutSection>
                <LayoutSection span={8}>
                    <Dropdown  content={dropdownContent()}><span>Categories <Icon source={PlusCircle} color="gray" size="16px" /></span></Dropdown>
                    {tags.length<=0 && <TypographyText>No categories added</TypographyText>}
                    {tags.map(tag=><Tag onRemove={()=>handleDelete(tag)}>{tag}</Tag>)}
                </LayoutSection>
                
            </Layout>

            <Layout alignY="center">
            <LayoutSection span={8}>
                    <Input.Item label="Phone Number">
                        <Input.Text placeholder="Enter phone" size="large" value={formData.phoneNumber} onChange={e=>setFormData({...formData,phoneNumber:e})}/>
                    </Input.Item>
                </LayoutSection>
                <LayoutSection span={8}>
                    <Input.Item label="Login to store">
                    <Switch checked={formData.checked}  size="default" onChange={e=>setFormData({...formData,checked:e})} />
                    </Input.Item>
                </LayoutSection>
                
            </Layout>


        </LayoutSection>
        <LayoutSection span={8}>
            <Layout>
            <Icon source={Customers} color="gray" size="48px"/>
            </Layout>
            <Space spacing={[0, 0, 'small',0]} ></Space>
            <Layout>
                <TypographyTitle level={2}>Customers Overview</TypographyTitle>
            </Layout>
            <Layout>
                <TypographyText size="small">
                    Add the details for this customer. These will <br /> help track purchases.
                </TypographyText>
            </Layout>
        </LayoutSection>
      </Layout>
      
      <Layout alignY="center">
          <LayoutSection span={16}>
              <Divider/>
          </LayoutSection>
      </Layout>

      <Layout gutter={[30, 28]} alignY="center">
        <LayoutSection span={8}>

        <Layout alignY="center">
                <LayoutSection span={8}>
                    <Input.Item label="Gender">
                    <Select value={formData.gender} onChange={e=>setFormData({...formData,gender:e})} size="large" >
                        <SelectOption value="male">Male</SelectOption>
                        <SelectOption value="female">Female</SelectOption>
                    </Select>
                    </Input.Item>
                </LayoutSection>
                <LayoutSection span={8}>
                    <Input.Item label="Birthday">
                    <DatePicker
                    picker="date"
                    value={formData.birthday} 
                    onChange={e=>setFormData({...formData,birthday:e})}
                    format="DD/MM/YYYY"
                    suffixIcon={<Icon source={CalendarFilled} color="gray" size="24px"/>
                    
                }
                    
                    />
                    </Input.Item>
                </LayoutSection>
            </Layout>

            <Layout alignY="center">
                <LayoutSection span={16}>
                <Input.Item label="Address">
                        <Input.Text placeholder="Enter address" size="large" value={formData.adress} onChange={e=>setFormData({...formData,adress:e})}/>
                    </Input.Item>
                </LayoutSection>
            </Layout>

            <Layout alignY="center">
            <LayoutSection span={8}>
                <Input.Item label="City">
                <Select value={formData.city} onChange={e=>setFormData({...formData,city:e})}  size="large">
                        <SelectOption value="bucharest">Bucharest</SelectOption>
                        <SelectOption value="lasVegas">Las Vegas</SelectOption>
                        <SelectOption value="newYork">New York</SelectOption>
                    </Select>
                    </Input.Item>
                </LayoutSection>

                <LayoutSection span={8}>
                <Input.Item label="Country">
                <Select value={formData.country} onChange={e=>setFormData({...formData,country:e})}  size="large">
                        <SelectOption value="romania">Romania</SelectOption>
                        <SelectOption value="lasVegas">USA</SelectOption>
                        <SelectOption value="newYork">Canada</SelectOption>
                    </Select>
                    </Input.Item>
                </LayoutSection>
            </Layout>

        </LayoutSection>

        <LayoutSection span={8}>
            <Layout>
                <Icon source={CustomerDetails} color="gray" size="48px"/>
            </Layout>
            <Space spacing={[0, 0, 'small',0]} ></Space>
            <Layout>
                <TypographyTitle level={2}>Extra Information</TypographyTitle>
            </Layout>
            <Layout>
                <TypographyText size="small">
                Non-mandatory details, leave blank if no <br /> information is available.      
                </TypographyText>
            </Layout>
        </LayoutSection>
        </Layout>
        <Layout alignY="center">
          <LayoutSection span={16}>
              <Divider/>
          </LayoutSection>
      </Layout>
    </>
  );
};

export default CustomersAdd;
