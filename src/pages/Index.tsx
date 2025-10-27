import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('all');

  const specialties = [
    {
      id: 'director',
      category: 'Режиссура',
      title: 'Режиссер-постановщик',
      icon: 'Clapperboard',
      description: 'Человек, что отвечает за художественную составляющую произведения. Под его руководством работают актёры, операторы, звукорежиссёр и прочее.',
      image: 'https://cdn.poehali.dev/projects/21705854-61e7-49a4-9a6c-091e620449dc/files/9412f5f6-51b7-4f03-9a33-8ff8125487e8.jpg'
    },
    {
      id: 'cinematographer',
      category: 'Операторское искусство',
      title: 'Оператор-постановщик',
      icon: 'Camera',
      description: 'Вторая после режиссёра ключевая фигура на съёмочной площадке. Он отвечает за визуальное воплощение сценария, выбор объективов, ракурсов и движений камеры.',
      image: 'https://cdn.poehali.dev/projects/21705854-61e7-49a4-9a6c-091e620449dc/files/f83d0743-84c7-4d4c-9a1d-1df7330716b0.jpg'
    },
    {
      id: 'sound',
      category: 'Звук',
      title: 'Звукооператор и звукорежиссёр',
      icon: 'Mic',
      description: 'Ответственны за запись и обработку звука. Их задача — добиться идеальной чистоты диалогов даже в сложных акустических условиях и создать звуковую атмосферу, соответствующую замыслу режиссёра.',
      image: 'https://cdn.poehali.dev/projects/21705854-61e7-49a4-9a6c-091e620449dc/files/f83d0743-84c7-4d4c-9a1d-1df7330716b0.jpg'
    },
    {
      id: 'gaffer',
      category: 'Свет',
      title: 'Гафер (главный осветитель)',
      icon: 'Lightbulb',
      description: 'Гафер и его команда отвечают за световую схему каждой сцены. От них зависит не только техническое качество изображения, но и создание определённой атмосферы через свет и тени.',
      image: 'https://cdn.poehali.dev/projects/21705854-61e7-49a4-9a6c-091e620449dc/files/97efe693-a872-4295-8fad-fd00915d2d28.jpg'
    },
    {
      id: '3d',
      category: 'Постпродакшн',
      title: '3D-дженералист',
      icon: 'Box',
      description: 'Универсальный специалист по созданию 3D-графики для киноэффектов. Занимается интеграцией трехмерных объектов и персонажей, созданием визуальных эффектов, разработкой окружения героев. Отвечает за создание и управление процессом разработки графики: от моделирования до анимации и рендеринга.',
      image: 'https://cdn.poehali.dev/projects/21705854-61e7-49a4-9a6c-091e620449dc/files/f83d0743-84c7-4d4c-9a1d-1df7330716b0.jpg'
    },
    {
      id: 'vfx',
      category: 'Постпродакшн',
      title: 'VFX-дизайнер',
      icon: 'Sparkles',
      description: 'Специалист, который создает визуальные эффекты с помощью компьютерной графики. Обычно это происходит на финальном этапе работы с продуктом. Например, дизайнер добавляет взрывы, летающие пули и инопланетный корабль, когда фильм уже отснят и смонтирован.',
      image: 'https://cdn.poehali.dev/projects/21705854-61e7-49a4-9a6c-091e620449dc/files/f83d0743-84c7-4d4c-9a1d-1df7330716b0.jpg'
    }
  ];

  const equipment = [
    {
      name: 'Кинокамера',
      category: 'Оборудование',
      description: 'Именно она фиксирует изображение, которое затем будет показано зрителю. Современные кинокамеры — это высокотехнологичные устройства, способные снимать видео в разрешении, значительно превышающем HD, и предлагающие кинематографистам беспрецедентный контроль над изображением.',
      icon: 'Video'
    },
    {
      name: 'Фикс-объективы',
      category: 'Оборудование',
      description: 'Объективы с фиксированным фокусным расстоянием.',
      icon: 'Focus'
    },
    {
      name: 'Зум-объективы',
      category: 'Оборудование',
      description: 'Объективы с переменным фокусным расстоянием.',
      icon: 'ZoomIn'
    },
    {
      name: 'Анаморфотные объективы',
      category: 'Оборудование',
      description: 'Создают характерные овальные блики и широкоэкранное изображение с эффектом «растянутой» перспективы.',
      icon: 'Aperture'
    },
    {
      name: 'HMI-лампы',
      category: 'Оборудование',
      description: 'Мощные источники холодного света, имитирующие дневной свет.',
      icon: 'Sun'
    },
    {
      name: 'LED-панели',
      category: 'Оборудование',
      description: 'Современные, энергоэффективные и компактные источники света, позволяющие регулировать цветовую температуру и яркость.',
      icon: 'Lamp'
    },
    {
      name: 'Флуоресцентные лампы',
      category: 'Оборудование',
      description: 'Используются для мягкого, рассеянного освещения.',
      icon: 'Lightbulb'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все специальности' },
    { id: 'Режиссура', name: 'Режиссура' },
    { id: 'Операторское искусство', name: 'Операторское искусство' },
    { id: 'Звук', name: 'Звук' },
    { id: 'Свет', name: 'Свет' },
    { id: 'Постпродакшн', name: 'Постпродакшн' },
    { id: 'Оборудование', name: 'Оборудование' }
  ];

  const filteredSpecialties = activeSection === 'all' 
    ? specialties 
    : specialties.filter(s => s.category === activeSection);

  const showEquipment = activeSection === 'Оборудование' || activeSection === 'all';

  return (
    <div className="min-h-screen bg-cinema-dark">
      <div 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://cdn.poehali.dev/projects/21705854-61e7-49a4-9a6c-091e620449dc/files/f83d0743-84c7-4d4c-9a1d-1df7330716b0.jpg')`
        }}
      >
        <div className="text-center space-y-6 px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gold glow-gold tracking-wider">
            СПЕЦИАЛЬНОСТИ И ОБОРУДОВАНИЕ В КИНО
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Откройте для себя профессии, которые создают магию кинематографа
          </p>
          <div className="flex items-center justify-center gap-2 text-gold">
            <Icon name="Film" size={24} className="animate-glow" />
            <span className="text-sm uppercase tracking-widest">Искусство создания фильмов</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveSection}>
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-cinema-blue p-2 mb-12 h-auto">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="data-[state=active]:bg-gold data-[state=active]:text-black text-gray-300 px-6 py-3 rounded-md transition-all hover:text-gold"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(cat => (
            <TabsContent key={cat.id} value={cat.id} className="space-y-12">
              {(cat.id === 'all' || cat.id !== 'Оборудование') && filteredSpecialties.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSpecialties.map((specialty, index) => (
                    <Card 
                      key={specialty.id}
                      className="bg-card border-gold/20 hover:border-gold transition-all duration-500 overflow-hidden group cursor-pointer hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={specialty.image} 
                          alt={specialty.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <Icon name={specialty.icon as any} size={32} className="text-gold" />
                        </div>
                      </div>
                      <CardHeader>
                        <div className="text-xs uppercase tracking-widest text-gold mb-2">
                          {specialty.category}
                        </div>
                        <CardTitle className="text-2xl text-gold group-hover:glow-gold transition-all">
                          {specialty.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300 leading-relaxed">
                          {specialty.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {showEquipment && (
                <div className="mt-16">
                  <h2 className="text-4xl font-bold text-gold text-center mb-12 glow-gold">
                    ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipment.map((item, index) => (
                      <Card 
                        key={index}
                        className="bg-cinema-blue border-gold/20 hover:border-gold transition-all duration-300 group cursor-pointer hover:scale-105"
                      >
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gold/10 rounded-full group-hover:bg-gold/20 transition-all">
                            <Icon name={item.icon as any} size={32} className="text-gold" />
                          </div>
                          <CardTitle className="text-xl text-gold">
                            {item.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 text-center text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <footer className="bg-cinema-blue py-8 mt-16 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Специальности в кино. Образовательный проект о кинопроизводстве
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;